# https://www.redblobgames.com/grids/hexagons/#basics
class Hexagon
  
  attr_accessor :size, :spacing
  
  def initialize(size = 6, spacing = 1.0)
    @size    = size
    @spacing = spacing
  end
  
  def width(x_spacing = spacing)
    (Math.sqrt(3) * size) * x_spacing
  end
  
  def height(y_spacing = spacing)
    2 * size * y_spacing
  end
  
  def between_rows
    0.75 * height
  end
  
  def high(rows)
    ((rows + 1) * between_rows).ceil
  end
  
  def wide(cols)
    ((cols + 1) * width).ceil
  end
  
  def extents(cols, rows)
    [
      [
        (-width / 2.0).floor,
        (-height / 2.0).floor,
      ],
      [
        wide(cols), high(rows)
      ]
    ]
  
  end
end