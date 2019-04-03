# frozen_string_literal: true
module Types
  class Card < Types::BaseObject
    description 'Card'

    field :id, ID, null: false
    field :name, String, null: false
    field :dice, [Types::Dice], null: false
    field :location, String, null: false
    field :slug, Integer, null: false
  end
end
