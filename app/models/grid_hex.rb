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
  NEIGHBORS   = [
    { q: 0, r: 1, s: -1 },
    { q: 1, r: 0, s: -1 },
    { q: 1, r: -1, s: 0 },
    { q: 0, r: -1, s: 1 },
    { q: -1, r: 0, s: 1 },
    { q: -1, r: 1, s: 0 },
  ]
  # also change in client/styles/__pallette.css
  #                client/styles/components/GridMap/styles.module.css
  TERRAINS    = {
    distant:   0,
    city:      1,
    lake:      2,
    ocean:     3,
    mountains: 4,
    
    plains:    10,
    forest:    11,
    hills:     12,
    swamp:     13,
    desert:    14,
  }
  TERRITORIES = {
    unexplored: 0,
    tamed:      1,
    frontier:   2,
    wilds:      3,
    enemy:      4,
    sea:        5,
    impassable: 6,
  }
  
  belongs_to :grid_map
  enum terrain: TERRAINS
  enum territory: TERRITORIES
  
  def label
    "(#{q},#{r},#{s})"
  end

  def coords
    [q + (s - (s&1)) / 2, s]
  end
  
  def neighbors
    NEIGHBORS.map do |delta|
      coords = {
        q: q + delta[:q],
        r: r + delta[:r],
        s: s + delta[:s]}
      grid_map.grid_hexes.find_by(coords)
    end
  end
  
  def self.random_terrain
    GridHex::TERRAINS.select { |k, v| v >= 10 }.keys.sample
  end
end
