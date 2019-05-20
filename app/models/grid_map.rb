# == Schema Information
#
# Table name: grid_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer
#  flat       :boolean          default(FALSE)
#  name       :string
#  rows       :integer
#  size       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridMap < ApplicationRecord
  has_many :grid_hexes

  
end
