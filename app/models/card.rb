# == Schema Information
#
# Table name: cards
#
#  id       :bigint(8)        not null, primary key
#  location :integer          default("draw")
#  name     :string
#  reward   :integer          default("money1")
#  slug     :integer          default(0)
#  game_id  :bigint(8)
#
# Indexes
#
#  index_cards_on_game_id           (game_id)
#  index_cards_on_game_id_and_slug  (game_id,slug)
#
# Foreign Keys
#
#  fk_rails_...  (game_id => games.id)
#

class Card < ApplicationRecord
  DEAL_CARDS = {
    'slot1' => 1,
    'slot2' => 1,
    'slot3' => 1,
    'slot4' => 1,
    'slot5' => 2,
  }
  DECK_LOCATIONS = %w{draw discards}
  PUBLIC_LOCATIONS = DEAL_CARDS.keys
  LOCATIONS = DECK_LOCATIONS + PUBLIC_LOCATIONS + Player::PLAYERS
  REWARDS = [:money1,:money2,:money3]

  enum location: LOCATIONS, reward: REWARDS

  has_one :game
  has_many :dice, as: :bag, autosave: true, dependent: :destroy

  default_scope ->{order(:slug)}
end
