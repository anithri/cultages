# == Schema Information
#
# Table name: dice
#
#  id        :bigint(8)        not null, primary key
#  selected  :boolean
#  slug      :integer          default(0)
#  value     :integer          default(0)
#  player_id :bigint(8)
#
# Indexes
#
#  index_dice_on_player_id           (player_id)
#  index_dice_on_player_id_and_slug  (player_id,slug)
#

class Dice < ApplicationRecord
  SIDES = 6

  belongs_to :player
  has_one :dice_requirement

  validates :value, allow_nil: true, numericality: {
    only_integer:             true,
    greater_than_or_equal_to: -SIDES,
    less_than_or_equal_to:    SIDES
  }

  default_scope -> { includes(:player).order(:slug) }

  def roll
    self.value = Dice.roll
  end

  def self.roll
    rand(SIDES) + 1
  end

  def self.bag(count, rolled = true, theme: :unselected)
    Array.new(count) do |idx|
      Dice.new(
        {
          slug:  idx,
          value: rolled && (rand(SIDES) + 1),
        }
      )
    end
  end
end
