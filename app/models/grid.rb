# == Schema Information
#
# Table name: grids
#
#  id   :bigint(8)        not null, primary key
#  cols :integer          default(16)
#  name :string
#  rows :integer          default(9)
#  size :integer          default(12)
#

class Grid < ApplicationRecord
  has_many :hexagons
  has_many :points
end
