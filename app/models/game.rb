# == Schema Information
#
# Table name: games
#
#  id         :bigint(8)        not null, primary key
#  game_state :string
#  name       :string
#  turn       :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
  has_many :players
  has_many :card_locations
  has_many :draw, -> {where(purpose: :draw)}, class_name: 'CardLocation'
  has_many :discards, -> {where(purpose: :discards)}, class_name: 'CardLocation'
end
