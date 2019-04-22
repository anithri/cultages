# == Schema Information
#
# Table name: grid_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer
#  name       :string
#  radius     :integer
#  rows       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridMap < ApplicationRecord
  has_many :hexes, class_name: 'GridHex'
  has_many :corners, class_name: 'GridCorner'

  scope :details, -> { includes(:corners, hexes: [:center, :corners]) }
  scope :public_list, -> { all }

  def height
    corners.maximum(:y) - corners.minimum(:y)
  end

  def width
    corners.maximum(:x) - corners.minimum(:x)
  end

  def max_q
    hexes.maximum(:q)
  end

  def min_q
    hexes.minimum(:q)
  end

  def max_r
    hexes.maximum(:r)
  end

  def min_r
    hexes.minimum(:r)
  end

  def max_s
    hexes.maximum(:s)
  end

  def min_s
    hexes.minimum(:s)
  end

end
