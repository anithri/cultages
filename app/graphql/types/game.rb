# frozen_string_literal: true
module Types
  class Game < Types::BaseObject
    description 'Game'

    field :id, ID, null: false
    field :name, String, null: true
    field :url, String, null: false
    field :players, Types::Player.connection_type, null: false
    field :current_player_id, String, null: true
    field :selected_dice, Types::Dice, null: true

    field :board_slots, [CardSlot], null: false

    def board_slots
      object.card_slots
        .group_by(&:location)
        .entries
        .map { |k, arr| ::CardSlot.new(k, arr) }
    end

    field :discards_card_count, Integer, null: false

    def discards_card_count
      object.discards.count
    end

    field :draw_card_count, Integer, null: false

    def draw_card_count
      object.draw.count
    end

    field :messages, [Types::Message], null: false
  end
end
