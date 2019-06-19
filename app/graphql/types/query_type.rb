# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject

    # region Game Fields
    field :game, Types::Game, null: true do
      argument :game_id, ID, required: true, as: :id
    end
    def game(id:)
      ::Game.tree.find id
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
      ::Player.tree.find id
    end
    # endregion

    # last of fields
  end
end
