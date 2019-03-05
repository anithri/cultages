# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject

    # region Card Fields
    field :card, Types::Card, null: true do
      argument :card_id, ID, required: true, as: :id
    end
    def card(id:)
      ::Card.locate id
    end

    field :cards, Types::Card.connection_type, null: false
    def cards
      ::Card.all
    end
    # endregion

    # region Game Fields
    field :game, Types::Game, null: true do
      argument :game_id, ID, required: true, as: :id
    end
    def game(id:)
      ::Game.find id
    end

    field :games, Types::Game.connection_type, null: false
    def games
      ::Game.all
    end
    # endregion

    # region Player Fields
    field :player, Types::Player, null: true do
      argument :player_id, ID, required: true, as: :id
    end
    def player(id:)
      ::Player.locate id
    end
    # endregion

    # last of fields
  end
end
