module Mutations
  class SelectDice < BaseMutation
    field :game, Types::Game, null: false

    argument :dice_id, ID, required: true, as: :id
    def resolve(id:)
      dice = Dice.tree.find(id)
      Events::SelectDice.call(dice: dice)
      game = dice.game
      return {game: nil, errors: game.errors.messages} if game.errors.any?
      {
        game: game,
      }
    end
  end
end
