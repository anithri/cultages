# == Schema Information
#
# Table name: grid_corners
#
#  id          :bigint(8)        not null, primary key
#  category    :integer          default("center")
#  x           :decimal(8, 3)
#  y           :decimal(8, 3)
#  z           :decimal(8, 3)
#  grid_map_id :bigint(8)
#
# Indexes
#
#  index_grid_corners_on_grid_map_id              (grid_map_id)
#  index_grid_corners_on_grid_map_id_and_x_and_y  (grid_map_id,x,y) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (grid_map_id => grid_maps.id)
#

class GridCorner < ApplicationRecord
  enum category: %w{center corner}
  belongs_to :grid_map, inverse_of: :corners
  has_and_belongs_to_many :grid_hexes, inverse_of: :hexes
  has_one :hex, class_name: "GridHex", inverse_of: :center, required: false
  scope :corners, -> { where(category: :corner) }
  scope :centers, -> { where(category: :center) }
end
