# frozen_string_literal: true
module Types
  class Game < Types::BaseObject
    description 'Game'

    field :id, ID, null: false
    field :name, String, null: true
    field :url, String, null: false
    field :players, Types::Player.connection_type, null: false
    field :current_player_id, String, null: true
    field :draw, Types::Card.connection_type, null: false
    field :draw_card_count, Integer, null: false
    def draw_card_count
      draw.count
    end

    field :discards, Types::Card.connection_type, null: false
    field :discards_card_count, Integer, null: false
    def discards_card_count
      discards.count
    end
  end
end
