# == Schema Information
#
# Table name: grid_hexes
#
#  id          :bigint(8)        not null, primary key
#  q           :integer
#  r           :integer
#  s           :integer
#  terrain     :integer          default("distant")
#  territory   :integer          default("unexplored")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  grid_map_id :bigint(8)        not null
#
# Indexes
#
#  index_grid_hexes_on_grid_map_id  (grid_map_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_map_id => grid_maps.id)
#

class GridHex < ApplicationRecord
  TERRAINS    = {
    distant:   0,
    ocean:     1,
    lake:      2,
    plains:    3,
    hills:     4,
    mountains: 5,
    swamp:     6,
    desert:    7,
  }
  TERRITORIES = {
    unexplored: 0,
    tamed: 1,
    frontier: 2,
    wilds: 3,
    enemy: 4,
    sea: 5,
  }
  
  belongs_to :grid_map
  enum terrain: TERRAINS
  enum territory: TERRITORIES
  
  def label
    "(#{q},#{r},#{s})"
  end
  
end
