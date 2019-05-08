# == Schema Information
#
# Table name: grid_layouts
#
#  id   :bigint(8)        not null, primary key
#  cols :integer          default(16)
#  rows :integer          default(10)
#  size :integer          default(12)
#

class GridLayout < ApplicationRecord
  DIRECTIONS = %W{CENTER SOUTHWEST NORTHWEST NORTH NORTHEAST SOUTHEAST SOUTH}
  def self.corners
    DIRECTIONS[1..-1]
  end
  def self.center
    DIRECTIONS[0]
  end

  has_many :hexagons
  has_many :points

  def width
    (cols * size * Math.sqrt(3)).round
  end
  def height
    (rows * size * 2).round
  end

end
