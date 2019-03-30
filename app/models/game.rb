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

  validates :game_state, :name, presence: true

  has_many :card_locations, autosave: true, dependent: :delete_all
  has_many :players, autosave: true, dependent: :destroy
  has_many :draw_deck, -> { where(purpose: :draw) }, class_name: 'CardLocation', autosave: true
  has_many :discard_deck, -> { where(purpose: :discards) }, class_name: 'CardLocation', autosave: true

  scope :deep, -> { includes(:players, card_locations: :card)}

  def draw
    draw_deck.map(&:card)
  end

  def discards
    discard_deck.map(&:card)
  end

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

  def deal(player,cards = 1)
    cards.times do
      loc = draw_deck.find(&:draw?)
      loc.player = player
      loc.purpose = :hand
      loc
    end
  end
end
