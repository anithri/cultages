module Mutations
  class SetupGame < BaseMutation
    field :game, Types::Game, null: true

    def resolve
      game = Game.setup

      return {game: nil, errors: game.errors.messages} unless game.errors.blank?

      {game: game}
    end
  end
end
