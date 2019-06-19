# == Schema Information
#
# Table name: game_maps
#
#  id         :bigint(8)        not null, primary key
#  cols       :integer          default(4)
#  extents    :jsonb
#  name       :string
#  rows       :integer          default(6)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GameMap < ApplicationRecord
  has_many :game_hexes

  def ocean_starter
    ends = game_hexes
      .where(terrain: :distant)
      .group_by(&:r)
      .values
      .map do |row|
      arr = row.sort_by(&:q)
      [arr.first, arr.last]
    end
  
    ends.push(game_hexes.where(r: 0))
    ends.push(game_hexes.where(r: 7))
    ends.flatten.sample()
  end

  def mountain_starter
    game_hexes.where(terrain: :distant).sample
  end

end
