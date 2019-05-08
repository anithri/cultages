# == Schema Information
#
# Table name: corners
#
#  id         :bigint(8)        not null, primary key
#  direction  :integer          default("CENTER")
#  hexagon_id :bigint(8)        not null
#  point_id   :bigint(8)        not null
#
# Indexes
#
#  index_corners_on_hexagon_id  (hexagon_id)
#  index_corners_on_point_id    (point_id)
#
# Foreign Keys
#
#  fk_rails_...  (hexagon_id => hexagons.id)
#  fk_rails_...  (point_id => points.id)
#

class Corner < ApplicationRecord
  enum direction: GridLayout::DIRECTIONS

  belongs_to :point
  belongs_to :hexagon
end
