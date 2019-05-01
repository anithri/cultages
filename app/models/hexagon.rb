# == Schema Information
#
# Table name: hexagons
#
#  id      :bigint(8)        not null, primary key
#  col     :integer          default(0)
#  q       :integer          default(0)
#  r       :integer          default(0)
#  row     :integer          default(0)
#  s       :integer          default(0)
#  grid_id :bigint(8)        not null
#
# Indexes
#
#  index_hexagons_on_grid_id  (grid_id)
#
# Foreign Keys
#
#  fk_rails_...  (grid_id => grids.id)
#

class Hexagon < ApplicationRecord
  belongs_to :grid
  has_many :corners
end
