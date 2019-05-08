class ProcessGridData
  include Interactor

  before do
    context.fail!(error: 'No grid_data found') unless context.raw_data
    context.grid_data = context.raw_data[:grid]
    context.hex_data  = context.raw_data[:hexes]
  end

  delegate :grid_data, :grid, :hex_data, :hexes, to: :context

  def call
    context.grid  = GridLayout.create(context.grid_data)
    context.hexes = context.hex_data.map do |data|
      hex = grid.hexagons.create(
        size: data['size'],
        cols: data['cols'],
        rows: data['rows'],
      )

      hex.center = Point.find_or_create_by(data["center"].merge(grid_layout: grid))

      data["corners"].each_with_index do |c, idx|
        corner = Point.find_or_create_by(c.merge(grid_layout: grid))
        hex.corners.create(point: corner, direction: GridLayout::DIRECTIONS[idx + 1])
      end

    end
  end
end
