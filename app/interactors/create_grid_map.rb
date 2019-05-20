class CreateGridMap
  include Interactor
  
  before do
    context.fail!(error: 'no grid given') unless context.data
    context.ocean_cycles    ||= [10, 5, 9]
    context.mountain_cycles ||= [3, 2]
    
    context.faker ||= Steps::Faker.random
  end
  
  delegate :faker, :grid_map, :data, to: :context
  
  def call
    context.grid_map = GridMap.create(data['grid'])
    grid_map.name    = faker.game_name
    
    data['hexes'].each do |hex|
      grid_map.grid_hexes.create(hex)
    end
    grid_map.save
    oceans
    mountains
  end
  
  def in_range(size)
    rand(1 + size * 2) - size
  end
  
  def random_delta(base, rng = 1)
    {
      q: base.q + in_range(rng),
      r: base.r + in_range(rng),
      s: base.s + in_range(rng),
    }
  end
  
  def oceans
    context.ocean_cycles.each do |count|
      h      = grid_map.ocean_starter
      oceans = [h]
      count.times do
        delta = random_delta(h)
        hex   = grid_map.grid_hexes.find_by(delta)
        
        oceans.push(hex) if hex
      end
      oceans.uniq.each { |hex| hex.update(terrain: :ocean, territory: :sea) }
    end
  end
  
  def mountains
    above = grid_map.grid_hexes.where.not(terrain: :ocean)
    range = []
    context.mountain_cycles.each do |count|
      range.push(*above.sample(count))
    end
    range.uniq.each { |hex| hex.update(terrain: :mountains) }
  end
  
  delegate :cols, :rows, :size, to: :grid_map
end
#