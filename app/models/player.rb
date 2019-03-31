# == Schema Information
#
# Table name: players
#
#  id         :bigint(8)        not null, primary key
#  dice       :integer          default(["0", "0", "0", "0", "0"]), is an Array
#  money      :integer          default(0)
#  name       :string
#  slug       :integer          default("player1")
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
  PLAYERS = %w{player1 player2 player3 player4}
  THEMES = %w{ blue navy green pink purple gold orange red }

  enum slug: PLAYERS

  belongs_to :game
  has_many :cards, ->{where(location: slug)}, through: :game

  default_scope -> { order(slug: :asc) }

  def theme
    THEMES[id % THEMES.length]
  end

  def roll
    self.dice = Array.new(self.dice.length){rand(6) + 1}
  end
end
