# == Schema Information
#
# Table name: grid_hexes
#
#  id          :bigint(8)        not null, primary key
#  altitudes   :integer          default(["0", "0", "0", "0", "0", "0", "0"]), is an Array
#  grid_map_id :bigint(8)        not null
#  hexagon_id  :bigint(8)        not null
#
# Indexes
#
#  index_grid_hexes_on_grid_map_id  (grid_map_id)
#  index_grid_hexes_on_hexagon_id   (hexagon_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_map_id => grid_maps.id)
#  fk_rails_...  (hexagon_id => hexagons.id)
#

class GridHex < ApplicationRecord
  belongs_to :grid_map
  belongs_to :hexagon
end
