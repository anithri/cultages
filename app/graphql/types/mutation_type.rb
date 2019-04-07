# frozen_string_literal: true

module Types
  class MutationType < BaseObject
    field :endTurn, mutation: Mutations::EndTurn
    field :fillRequirement, mutation: Mutations::FillRequirement
    field :selectDice, mutation: Mutations::SelectDice
    field :setup_game, mutation: Mutations::SetupGame
    field :start_game, mutation: Mutations::StartGame
    field :select_dice, mutation: Mutations::SelectDice
    # field :next_round, mutation: Mutations::NextRound
  end
end
