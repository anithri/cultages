class CreateGrid
  include Interactor

  before do
    context.fail!(error: 'no grid_data') if context.grid_data.empty?
  end

  def call
    context.grid_data[:hexes].each do |hex|
      data = hex[:cube]
      data[:center] = GridPoint.find_or_create_by(normalize(hex[:center], :center))

      data[:corners] = hex[:corners].map do |corner_data|
        corner = normalize(corner_data)
        GridPoint.find_or_create_by(corner)
      end

      GridHex.create(data)
    end
  end

  def normalize(coord, category = :corner)
    return {
      x: coord[:x].to_d.round(3),
      y: coord[:y].to_d.round(3),
      z: 0.0,
      category: category,
    }
  end

end
