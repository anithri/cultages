# frozen_string_literal: true
module Types
  class CardSlot < Types::BaseObject
    description 'CardSlot'

    field :id, ID, null: false
    field :cards, [Card], null: false

  end
end
