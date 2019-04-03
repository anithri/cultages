# == Schema Information
#
# Table name: dice
#
#  id       :bigint(8)        not null, primary key
#  bag_type :string
#  selected :boolean
#  slug     :integer          default(0)
#  value    :integer          default(0)
#  bag_id   :bigint(8)
#
# Indexes
#
#  index_dice_on_bag_id_and_bag_type_and_slug  (bag_id,bag_type,slug)
#  index_dice_on_bag_type_and_bag_id           (bag_type,bag_id)
#

class Dice < ApplicationRecord
  SIDES = 6

  belongs_to :bag, polymorphic: true

  validates :value, allow_nil: true, numericality: {
    only_integer:             true,
    greater_than_or_equal_to: -SIDES,
    less_than_or_equal_to:    SIDES
  }

  default_scope -> { order(:slug) }

  def roll
    self.value = rand(SIDES) + 1
  end

  def self.bag(count, rolled = true)
    Array.new(count) do |idx|
      Dice.new(
        slug:  idx,
        value: rolled && (rand(SIDES) + 1)
      )
    end
  end
end
