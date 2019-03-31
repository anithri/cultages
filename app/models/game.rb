# == Schema Information
#
# Table name: games
#
#  id         :bigint(8)        not null, primary key
#  game_state :string
#  name       :string
#  turn       :integer          default(-1)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
  include Rules
  include GameState
  include CardSlots

  validates :game_state, :name, presence: true

  has_many :players, autosave: true, dependent: :destroy

  default_scope -> { includes(:players, :cards) }
  scope :list, -> { unscope.order(name: :asc) }

  def url
    if player_turn?
      "/games/#{id}/player/#{current_player.id}"
    else
      "/games/#{id}/#{game_state}"
    end
  end

  def current_player
    players[turn % players.length]
  end

  def current_player_id
    return if turn < 0
    current_player.id
  end

  def advance_turn
    self.turn += 1
  end
end
