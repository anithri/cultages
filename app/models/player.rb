# == Schema Information
#
# Table name: players
#
#  id      :bigint(8)        not null, primary key
#  money   :integer          default(0)
#  name    :string
#  slug    :integer          default("player1")
#  game_id :bigint(8)
#
# Indexes
#
#  index_players_on_game_id           (game_id)
#  index_players_on_game_id_and_slug  (game_id,slug)
#
# Foreign Keys
#
#  fk_rails_...  (game_id => games.id)
#

class Player < ApplicationRecord
  DICE_BAG_SIZE = 5
  PLAYERS = %w{player1 player2 player3 player4}.freeze
  THEMES = %w{ blue navy green purple gold orange red }.freeze

  enum slug: PLAYERS

  belongs_to :game
  has_many :dice, as: :bag, autosave: true, dependent: :delete_all

  default_scope -> { includes(:dice).order(slug: :asc) }

  def cards
    game.send(slug)
  end

  def theme
    THEMES[id % THEMES.length]
  end

  def roll
    self.dice = self.dice.each{|d| d.roll}
  end
end
