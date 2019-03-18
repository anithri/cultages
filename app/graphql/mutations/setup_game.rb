module Mutations
  class SetupGame < BaseMutation
    field :game, Types::Game, null: true

    def resolve
      game = Game.setup

      return {game: nil, errors: game.errors || []} if game.errors?

      { game: game}
    end
  end
end
