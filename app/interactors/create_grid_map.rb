class CreateGridMap
  include Interactor

  before do
    context.fail!(error: 'no grid given') unless context.grid
    context.faker ||= Steps::Faker.random
  end

  delegate :faker, :grid_map, :grid, to: :context

  def call
    context.grid_map = GridMap.create(
      name: faker.game_name,
      grid_layout: grid,
    )
    allHexes = grid.hexagons.map{|h| {hexagon: h}}
    grid_map.grid_hexes.create(allHexes)
  end
end
