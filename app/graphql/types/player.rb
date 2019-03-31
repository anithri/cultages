# frozen_string_literal: true
module Types
  class Player < Types::BaseObject
    description 'Player'

    field :id, ID, null: false
    field :name, String, null: false
    field :slug, String, null: false
    field :dice, [Integer], null: false
    field :theme, String, null: false
    field :money, Integer, null: false
    field :cards, CardSlot, null: false
    def cards

    end
  end
end
