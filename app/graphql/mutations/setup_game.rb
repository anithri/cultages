module Mutations
  class SetupGame < BaseMutation
    field :game, Types::Game, null: true

    def resolve
      game = Events::CreateGame.call

      return {game: nil, errors: game.errors || []} if game.errors?

      game.setup_game!

      return {game: nil, errors: game.errors || []} if game.errors?

      { game: game}
    end
  end
end
