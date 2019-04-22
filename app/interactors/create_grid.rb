class CreateGrid
  include Interactor

  before do
    context.faker ||= Steps::Faker.random

    context.cols   ||= 48
    context.origin ||= { x: 0, y: 0, z: 0 }
    context.radius ||= 12
    context.rows   ||= 30

    context.grid_data = {
      cols:   context.cols,
      name:   context.faker.game_name,
      origin: context.origin,
      radius: context.radius,
      rows:   context.rows,
    }
    context.col_arr   = cols.times.to_a
    context.row_arr   = rows.times.to_a
  end

  delegate :altitude, :col_arr, :cols, :faker, :grid_map, :radius, :row_arr,
           :rows,
           to: :context

  def call
    context.grid_map = GridMap.create(context.grid_data)

    hexes = col_arr.product(row_arr).map do |(x, y)|
      return {
        altitude:  altitude,
        altitudes: Array.new(6, altitude),
        x:         x,
        y:         y,
      }
    end
    grid_map.hexes.create(hexes)
  end
end
