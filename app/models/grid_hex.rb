# == Schema Information
#
# Table name: grid_hexes
#
#  id        :bigint(8)        not null, primary key
#  q         :integer
#  r         :integer
#  s         :integer
#  center_id :bigint(8)
#
# Indexes
#
#  index_grid_hexes_on_center_id      (center_id)
#  index_grid_hexes_on_q_and_r_and_s  (q,r,s) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (center_id => grid_points.id)
#

class GridHex < ApplicationRecord
  belongs_to :center, class_name: "GridPoint"
  has_and_belongs_to_many :corners,->{corners}, class_name: "GridPoint"

  validates :q, :r, :s, presence: true, numericality: {only_integer: true}
  validates_presence_of :center

  def label
    "R#{q}#{r}"
  end
end
