class CreateGrid
  include Interactor

  before do
    context.fail!(error: 'no grid_data') if context.grid_data.empty?
    context.faker = Steps::Faker.random
  end

  def call
    context.grid_map = GridMap.create(
      cols:   48,
      rows:   30,
      radius: 24,
      name:   context.faker.game_name,
    )

    context.grid_data[:hexes].each do |hex|
      data = hex[:cube]
      data[:grid_map] = context.grid_map
      data[:center] = GridCorner.find_or_create_by(
        normalize(hex[:center], :center)
      )

      data[:corners] = hex[:corners].map do |corner_data|
        corner = normalize(corner_data)
        GridCorner.find_or_create_by(corner)
      end

      h = GridHex.create(data)
    end
  end

  def normalize(coord, category = :corner)
    return {
      x:        coord[:x].to_d.round(3),
      y:        coord[:y].to_d.round(3),
      z:        0.0,
      category: category,
      grid_map: context.grid_map,
    }
  end
end
