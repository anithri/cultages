# == Schema Information
#
# Table name: points
#
#  id      :bigint(8)        not null, primary key
#  x       :decimal(8, 2)
#  y       :decimal(8, 2)
#  grid_id :bigint(8)        not null
#
# Indexes
#
#  index_points_on_grid_id  (grid_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_id => grids.id)
#

class Point < ApplicationRecord
  belongs_to :grid
  has_many :corners
  has_many :hexagons, through: :corners
end
