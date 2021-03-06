# == Schema Information
#
# Table name: dice_requirements
#
#  id         :bigint(8)        not null, primary key
#  slug       :integer          default(0)
#  value      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  card_id    :bigint(8)
#  dice_id    :bigint(8)
#
# Indexes
#
#  index_dice_requirements_on_card_id  (card_id)
#  index_dice_requirements_on_dice_id  (dice_id)
#
# Foreign Keys
#
#  fk_rails_...  (card_id => cards.id)
#  fk_rails_...  (dice_id => dice.id)
#

class DiceRequirement < ApplicationRecord
  belongs_to :card, inverse_of: :dice_requirements
  belongs_to :dice, optional: true, inverse_of: :dice_requirement
  has_one :game, through: :card
  validates :card, presence: true

  # default_scope -> { includes(:card, :dice).order(:slug) }

  default_scope ->{order(slug: :asc)}
  scope :tree, -> {
    includes(:dice, card: [:player, :game, :dice_requirements]).order(:slug)
  }

  def theme
    dice ? dice.theme : 'unfilled'
  end

  def fillable
    return if self.dice
    return unless card.usable
    return unless game.selected_dice
    game.selected_dice.value == value
  end

  def fulfill(dice)
    return false if self.dice
    self.dice = dice
  end

  def self.bag(count)
    Array.new(count) do |idx|
      DiceRequirement.new(
        {
          value: Dice.roll,
          slug:  idx
        }
      )
    end
  end
end
