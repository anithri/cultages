class CreateGridMap
  include Interactor
  
  before do
    context.fail!(error: 'no grid given') unless context.data
    context.ocean_cycles    ||= [10, 5, 9]
    context.mountain_cycles ||= [6, 4]
    
    context.faker ||= Steps::Faker.random
  end
  
  delegate :faker, :game_map, :data, to: :context
  
  def call
    context.game_map = ::GameMap.create(data['grid'])
    game_map.name    = faker.game_name
    
    data['hexes'].each do |hex|
      game_map.game_hexes.create(hex)
    end
    game_map.save
    oceans
    mountains
    starting_hex
    fill_hexes
  end
  
  def in_range(size)
    rand(1 + size * 2) - size
  end
  
  def random_delta(base, rng = 1)
    {
      q:       base.q + in_range(rng),
      r:       base.r + in_range(rng),
      s:       base.s + in_range(rng),
      terrain: :distant,
    }
  end
  
  def oceans
    context.ocean_cycles.each do |count|
      h      = game_map.ocean_starter
      oceans = [h]
      count.times do
        delta = random_delta(h)
        hex   = game_map.game_hexes.find_by(delta)
        
        oceans.push(hex) if hex
      end
      oceans.uniq.each {|hex| hex.update(terrain: :ocean, territory: :sea)}
    end
  end
  
  def mountains
    context.mountain_cycles.each do |count|
      m         = game_map.mountain_starter
      mountains = [m]
      count.times do
        delta = random_delta(m)
        hex   = game_map.game_hexes.find_by(delta)
        
        mountains.push(hex) if hex
      end
      mountains.uniq.each {|hex| hex.update(terrain: :mountains, territory: :impassable)}
    end
  end
  
  def starting_hex
    city = game_map.ocean_starter
    city.update(terrain: :city, territory: :tamed)
    city.neighbors
      .compact
      .select(&:distant?)
      .each {|c| c.update(terrain: :plains, territory: :tamed)}
    game_map.game_hexes
      .where(terrain: :plains)
      .map(&:neighbors)
      .flatten
      .compact
      .select(&:distant?)
      .each {|h| h.update(terrain: GameHex.random_terrain, territory: :frontier)}
    game_map.game_hexes
      .where(territory: :frontier)
      .map(&:neighbors)
      .flatten
      .compact
      .select(&:distant?)
      .each {|h| h.update(terrain: GameHex.random_terrain, territory: :wilds)}
    
  end
  
  def fill_hexes
    game_map.game_hexes
      .where(terrain: :distant)
      .each {|h| h.update(terrain: GameHex.random_terrain, territory: :unexplored)}
  end
  
  delegate :cols, :rows, to: :game_map
end
