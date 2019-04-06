# frozen_string_literal: true
module Types
  class Dice < Types::BaseObject
    description 'Dice'

    field :id, ID, null: false
    field :selected, Boolean, null: true
    field :slug, Integer, null: false
    field :value, Integer, null: false
    field :theme, String, null: true
    field :in_use, Boolean, null: true
    def in_use
      !!object.dice_requirement
    end
  end
end
