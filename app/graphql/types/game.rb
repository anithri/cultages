# frozen_string_literal: true
module Types
  class Game < Types::BaseObject
    description 'Game'

    field :id, ID, null: false
    field :name, String, null: true

    field :players, Types::Player.connection_type, null: false
    field :draw, Types::Card.connection_type, null: false
    field :discards, Types::Card.connection_type, null: false
  end
end
