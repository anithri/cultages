# == Schema Information
#
# Table name: grid_hexes
#
#  id          :bigint(8)        not null, primary key
#  altitude    :integer          default(0)
#  altitudes   :integer          default(["0", "0", "0", "0", "0", "0"]), is an Array
#  x           :integer          default(0)
#  y           :integer          default(0)
#  grid_map_id :bigint(8)
#
# Indexes
#
#  index_grid_hexes_on_grid_map_id              (grid_map_id)
#  index_grid_hexes_on_grid_map_id_and_x_and_y  (grid_map_id,x,y) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (grid_map_id => grid_maps.id)
#

class GridHex < ApplicationRecord
  belongs_to :grid_map

  validates :x, :y, :altitude, presence: true, numericality: { only_integer: true }

  def label
    "(#{x},#{y})"
  end
end
