module Mutations
  class SelectDice < BaseMutation
    field :game, Types::Game, null: false

    argument :dice_id, ID, required: true, as: :id
    def resolve(id:)
      die = Events::SelectDice.call(dice_id: id)
      game = die.player.game
      return {game: nil, errors: game.errors.messages} if game.errors.any?
      {
        game: game,
      }
    end
  end
end
