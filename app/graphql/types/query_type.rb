# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject

    # region Card Fields
    field :card, Types::Card, null: true do
      argument :card_id, ID, required: true, as: :id
    end
    def card(id:)
      ::Card.tree.find id
    end

    field :cards, Types::Card.connection_type, null: false
    def cards
      ::Card.tree.all
    end
    # endregion

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

    #region Dice Fields
    field :dice, Types::Dice, null: true do
      argument :Dice_id, ID, required: true, as: :id
    end
    def dice(id:)
      ::Dice.tree.find id
    end

    field :dices, [Types::Dice], null: false
    def dices
      ::Dice.tree.all
    end
    #endregion

    #region DiceRequirement Fields
    field :diceRequirement, Types::DiceRequirement, null: true do
      argument :diceRequirement_id, ID, required: true, as: :id
    end
    def dice_requirement(id:)
      ::DiceRequirement.tree.find id
    end

    field :diceRequirements, [Types::DiceRequirement], null: false
    def dice_requirements
      ::DiceRequirement.tree.all
    end
    #endregion


    #region Hexes Fields
    field :hexagons, Types::Hexagon, null: true do
      argument :hexagon_id, ID, required: true, as: :id
    end
    def hexes(id:)
      ::Hexagon.includes(:center).find id
    end

    field :hexes, Types::Hexagon.connection_type, null: false
    def hexes
      ::Hexagon.includes(:center).all
    end
    #endregion

    #region GridMap Fields
    field :map, Types::Map, null: true do
      argument :map_id, ID, required: true, as: :id
    end
    def map(id:)
      ::GridMap.details.find id
    end

    field :maps, Types::Map.connection_type, null: false
    def maps
      ::GridMap.public_list
    end
    #endregion

    # last of fields
  end
end
