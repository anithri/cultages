# == Schema Information
#
# Table name: card_locations
#
#  id         :bigint(8)        not null, primary key
#  purpose    :integer          default("discards")
#  sort_order :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  card_id    :bigint(8)
#  game_id    :bigint(8)
#  player_id  :bigint(8)
#
# Indexes
#
#  index_card_locations_on_card_id    (card_id)
#  index_card_locations_on_game_id    (game_id)
#  index_card_locations_on_player_id  (player_id)
#
# Foreign Keys
#
#  fk_rails_...  (card_id => cards.id)
#  fk_rails_...  (game_id => games.id)
#  fk_rails_...  (player_id => players.id)
#

class CardLocation < ApplicationRecord
  belongs_to :game
  belongs_to :card
  belongs_to :player, optional: true

  enum purpose: [:discards, :draw, :hand, :tableau]

  default_scope ->{order(sort_order: :asc)}
end
