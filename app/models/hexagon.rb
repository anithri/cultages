# == Schema Information
#
# Table name: hexagons
#
#  id             :bigint(8)        not null, primary key
#  col            :integer          default(0)
#  q              :integer          default(0)
#  r              :integer          default(0)
#  row            :integer          default(0)
#  s              :integer          default(0)
#  grid_layout_id :bigint(8)        not null
#
# Indexes
#
#  index_hexagons_on_grid_layout_id  (grid_layout_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_layout_id => grid_layouts.id)
#

class Hexagon < ApplicationRecord
  belongs_to :grid_layout
  has_many :corners, -> { where(direction: GridLayout.corners) }
  has_one :center, -> { where(direction: GridLayout.center) }, class_name: "Corner"


end
