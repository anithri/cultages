# == Schema Information
#
# Table name: grid_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer
#  name       :string
#  origin     :jsonb
#  radius     :integer
#  rows       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridMap < ApplicationRecord
  has_many :hexes, class_name: 'GridHex', autosave: true, dependent: :delete_all

  scope :details, -> { includes(:hexes) }
  scope :public_list, -> { all }

  def width
    (cols * radius * Math.sqrt(3)).round
  end
  def height
    (rows * radius * 2).round
  end
end
