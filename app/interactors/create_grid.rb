class CreateGrid
  include Interactor

  before do
    context.faker ||= Steps::Faker.random

    context.cols   ||= 48
    context.origin ||= { x: 0, y: 0, z: 0 }
    context.radius ||= 12
    context.rows   ||= 30

    context.grid_data   = {
      cols:   context.cols,
      name:   context.faker.game_name,
      origin: context.origin,
      radius: context.radius,
      rows:   context.rows,
    }
    context.col_arr     = cols.times.to_a
    context.row_arr     = rows.times.to_a
    context.coordinates = context.col_arr.product(context.row_arr)
    context.wtf         = []
  end

  delegate :coordinates, :wtf, :origin, :cols,
           :faker, :grid_map, :radius, :rows,
           to: :context

  def call
    context.grid_map = GridMap.create(context.grid_data)

    hexes = coordinates.map do |(x, y)|
      wtf.push ['hex loop', x, y]
      {
        altitude:  origin[:z],
        altitudes: Array.new(6, origin[:z]),
        x:         x,
        y:         y,
      }
    end
    wtf.push 'made hexes'
    grid_map.hexes.create(hexes)
    wtf.push 'joined hexes'
  end
end
