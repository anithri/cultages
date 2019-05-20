# == Schema Information
#
# Table name: grid_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer
#  flat       :boolean          default(FALSE)
#  name       :string
#  rows       :integer
#  size       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridMap < ApplicationRecord
  has_many :grid_hexes
  NEIGHBORS = [
    [1, -1, 0], [1, 0, -1], [0, 1, -1],
    [-1, 1, 0], [-1, 0, 1], [0, -1, 1]
  ]
  
  def ocean_starter
    ends = grid_hexes
      .group_by(&:r)
      .values
      .map do |row|
      arr = row.sort_by(&:q)
      [arr.first, arr.last]
    end
    
    ends.push(grid_hexes.where(r: 0))
    ends.push(grid_hexes.where(r: 7))
    ends.flatten.sample()
  end
  
  def neighbors
    neighbors ||= NEIGHBORS.map do |delta|
      # grid_hexes.find_by()
    end
  end
end
