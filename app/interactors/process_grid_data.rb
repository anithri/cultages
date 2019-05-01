class ProcessGridData
  include Interactor

  before do
    context.fail!(error: 'No grid_data found') unless context.raw_data
    context.grid_data = context.raw_data[:grid]
    context.hex_data  = context.raw_data[:hexes]
  end

  delegate :grid_data, :grid, :hex_data, :hexes, to: :context

  def call
    context.grid  = Grid.create(context.grid_data)
    context.hexes = context.hex_data.map do |data|
      hex = grid.hexagons.create(data.reject { |k, v| %w{center corners} })

      center = Point.find_or_create_by(data["center"].merge(grid: grid))
      hex.corners.create(point: center, direction: "CENTER")

      data["corners"].each_with_index do |c, idx|
        corner = Point.find_or_create_by(c.merge(grid: grid))
        hex.corners.create(point: corner, direction: Corner::DIRECTIONS[idx + 1])
      end

    end
  end
end
