# == Schema Information
#
# Table name: players
#
#  id         :bigint(8)        not null, primary key
#  dice       :integer          default(["1", "1", "1", "1", "1"]), is an Array
#  money      :integer          default(0)
#  name       :string
#  sort_order :integer          default(0)
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
  THEMES = %w{ blue navy green pink purple gold orange red }

  belongs_to :game
  has_many :hand, -> { where(purpose: :hand) }, class_name: 'CardLocation'
  has_many :tableau, -> { where(purpose: :tableau) }, class_name: 'CardLocation'

  default_scope -> { order(sort_order: :asc) }

  def slug
    "player#{sort_order}"
  end

  def theme
    THEMES[id % THEMES.length]
  end

  def roll
    self.dice = Array.new(self.dice.length){rand(6) + 1}
  end
end
