# frozen_string_literal: true
module Types
  class Player < Types::BaseObject
    description 'Player'

    field :id, ID, null: false
    field :name, String, null: false
    field :slug, String, null: false
    field :hand, Types::Card.connection_type, null: false
    field :tableau, Types::Card.connection_type, null: false
    field :dice, [Integer], null: false
    field :theme, String, null: false
  end
end
