# == Schema Information
#
# Table name: points
#
#  id             :bigint(8)        not null, primary key
#  x              :decimal(8, 2)    default(0.0)
#  y              :decimal(8, 2)    default(0.0)
#  grid_layout_id :bigint(8)        not null
#
# Indexes
#
#  index_points_on_grid_layout_id  (grid_layout_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_layout_id => grid_layouts.id)
#

class Point < ApplicationRecord
  belongs_to :grid_layout
  has_many :corners
  has_many :hexagons, through: :corners
end
