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
    field :playerSlot, CardSlot, null: false
    def player_slot
      ::CardSlot.new(object.slug, object.cards)
    end
  end
end
