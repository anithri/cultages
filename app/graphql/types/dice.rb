# frozen_string_literal: true
module Types
  class Dice < Types::BaseObject
    description 'Dice'

    field :id, ID, null: false
    field :selected, Boolean, null: true
    field :slug, Integer, null: false
    field :value, Integer, null: false

  end
end
