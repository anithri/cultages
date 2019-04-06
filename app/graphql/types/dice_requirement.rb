# frozen_string_literal: true
module Types
  class DiceRequirement < Types::BaseObject
    description 'Dice Requirement'

    field :id, ID, null: false
    field :card, Types::Card, null: true
    field :slug, Integer, null: false
    field :value, Integer, null: false
    field :theme, String, null: false
    def theme
      'unfilled'
    end

  end
end
