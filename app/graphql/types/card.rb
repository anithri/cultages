# frozen_string_literal: true
module Types
  class Card < Types::BaseObject
    description 'Card'

    field :id, ID, null: false
    field :name, String, null: false
    field :dice_requirements, [Types::DiceRequirement], null: false
    field :dice, [Types::Dice], null: false
    field :location, String, null: false
    field :slug, Integer, null: false
    field :reward, String, null: false

    field :allow_select, Boolean, null: true
    def allow_select
      true
    end
  end
end
