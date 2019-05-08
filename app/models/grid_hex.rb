# == Schema Information
#
# Table name: grid_hexes
#
#  id          :bigint(8)        not null, primary key
#  q           :integer
#  r           :integer
#  s           :integer
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
  belongs_to :grid_map

  def label
    "(#{q},#{r},#{s})"
  end
end
