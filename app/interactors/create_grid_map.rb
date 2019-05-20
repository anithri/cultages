class CreateGridMap
  include Interactor
  
  before do
    context.fail!(error: 'no grid given') unless context.data
    context.faker ||= Steps::Faker.random
  end
  
  delegate :faker, :grid_map, :data, to: :context
  
  def call
    context.grid_map = GridMap.create(data['grid'])
    grid_map.name    = faker.game_name
    warn(data['hexes'])
    data['hexes'].each do |hex|
      grid_map.grid_hexes.create(hex)
    end
    grid_map.save
    context.extents = extents
  end
  
  delegate :cols, :rows, :size, to: :grid_map
  
  def width
    (Math.sqrt(3) * grid_map.size) * spacing
  end
  
  def height
    2 * size * spacing
  end
  
  def between_rows
    0.75 * height
  end
  
  def high
    # https://www.redblobgames.com/grids/hexagons/#basics
    ((rows + 1) * between_rows).ceil
  end
  
  def wide
    ((cols + 1) * width).ceil
  end
  
  def spacing
    1.2
  end
  
  def negSpacing
    [(-width / 2.0).floor, -size]
  end
  
  def extents
    [
      negSpacing,
      [
        wide, high
      ]
    ]
  
  end
end
