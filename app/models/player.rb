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
#  index_players_on_game_id  (game_id)
#
# Foreign Keys
#
#  fk_rails_...  (game_id => games.id)
#

class Player < ApplicationRecord
  DICE_BAG_SIZE = 5
  PLAYERS       = %w{player1 player2 player3 player4}.freeze
  THEMES        = %w{ blue navy green purple gold red }.freeze

  enum slug: PLAYERS

  belongs_to :game, inverse_of: :players
  has_many :dice, autosave: true,
           dependent:       :delete_all, inverse_of: :player

  default_scope ->{order(slug: :asc)}
  scope :tree, -> {
    includes(game: :selected_dice,
             dice: [:dice_requirement, { game: :selected_dice }])
      .order(slug: :asc)
  }

  def cards
    game.send(slug)
  end

  def theme
    THEMES[id % THEMES.length]
  end

  def earn(amt)
    self.money += amt
  end

  def spend(amt)
    if self.money <= amt
      self.money = 0
    else
      self.money -= amt
    end
  end

  def roll
    self.dice = self.dice.each { |d| d.roll }
  end
end
