# == Schema Information
#
# Table name: grid_points
#
#  id       :bigint(8)        not null, primary key
#  category :integer          default("center")
#  x        :decimal(8, 3)
#  y        :decimal(8, 3)
#  z        :decimal(8, 3)
#
# Indexes
#
#  index_grid_points_on_x_and_y  (x,y) UNIQUE
#

class GridPoint < ApplicationRecord
  enum category: %w{center corner}
  has_and_belongs_to_many :grid_hexes, inverse_of: :corners
  has_one :hex, class_name: "GridHex", inverse_of: :center, required: false
  scope :corners, -> { where(category: :corner) }
  scope :centers, -> { where(category: :center) }
end
