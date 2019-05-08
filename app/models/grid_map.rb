# == Schema Information
#
# Table name: grid_maps
#
#  id             :bigint(8)        not null, primary key
#  name           :string
#  grid_layout_id :bigint(8)        not null
#
# Indexes
#
#  index_grid_maps_on_grid_layout_id  (grid_layout_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_layout_id => grid_layouts.id)
#

class GridMap < ApplicationRecord
  belongs_to :grid_layout

  delegate :cols, :rows, :size, :height, :width, to: :grid_layout
  has_many :grid_hexes, class_name: 'GridHex'

  scope :details, ->{includes(grid_layout: {hexagons: {corners: :point}})}


end
