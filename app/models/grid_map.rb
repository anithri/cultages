# == Schema Information
#
# Table name: grid_maps
#
#  id      :bigint(8)        not null, primary key
#  name    :string
#  grid_id :bigint(8)        not null
#
# Indexes
#
#  index_grid_maps_on_grid_id  (grid_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_id => grids.id)
#

class GridMap < ApplicationRecord
  belongs_to :grid

  delegate :cols, :rows, :size, :height, :width, to: :grid
  has_many :hexes, class_name: 'GridHex'
end
