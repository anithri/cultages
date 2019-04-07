module Mutations
  class FillRequirement <  BaseMutation
    field :game, Types::Game, null: false
    argument :dice_requirement_id, ID, required: true, as: :id

    def resolve(id:)
      requirement = DiceRequirement.tree(id)
      Events::FillRequirement.call(dice_requirement: requirement)
      requirement = Events::FillRequirement.call(dice_requirement_id: id)
      game = requirement.card.game
      return {game: nil, errors: game.errors.messages} if game.errors.any?
      {
        game: game,
      }
    end
  end
end
