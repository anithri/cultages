# == Schema Information
#
# Table name: grid_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer
#  height     :decimal(, )
#  name       :string
#  radius     :integer
#  rows       :integer
#  width      :decimal(, )
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridMap < ApplicationRecord
  has_many :hexes, class_name: 'GridHex'
  has_many :points, class_name: 'GridPoint'
end
