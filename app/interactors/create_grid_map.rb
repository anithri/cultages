class CreateGridMap
  include Interactor

  before do
    context.fail!(error: 'no grid given') unless context.data
    context.faker ||= Steps::Faker.random
  end

  delegate :faker, :grid_map, :data, to: :context

  def call
    context.grid_map = GridMap.create(data[:grid])
    grid_map.name = faker.game_name
    data[:hexes].each do |hex|
      grid_map.grid_hexes.create(hex)
    end
    grid_map.save
  end
end
