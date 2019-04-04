# frozen_string_literal: true
module Types
  class Player < Types::BaseObject
    description 'Player'
    THEMES = %w{ blue navy green purple gold red }.freeze

    field :id, ID, null: false
    field :name, String, null: false
    field :slug, String, null: false
    field :dice, [Types::Dice], null: false
    field :money, Integer, null: false

    field :playerSlot, CardSlot, null: false
    def player_slot
      ::CardSlot.new(object.slug, object.cards)
    end

    field :theme, String, null: false
    def theme
      THEMES[object.id % THEMES.length]
    end
  end
end
