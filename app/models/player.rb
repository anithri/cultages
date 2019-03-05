# == Schema Information
#
# Table name: players
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  sortOrder  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  game_id    :bigint(8)
#
# Indexes
#
#  index_players_on_game_id  (game_id)
#
# Foreign Keys
#
#  fk_rails_...  (game_id => games.id)
#

class Player < ApplicationRecord
  PER_GAME = 4

  belongs_to :game
  has_many :hand, ->{where(purpose: :hand)}, class_name: 'CardLocation'
  has_many :tableau, ->{where(purpose: :tableau)}, class_name: 'CardLocation'

  default_scope ->{order(sortOrder: :asc)}
end
