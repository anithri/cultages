module Mutations
  class StartGame < BaseMutation
    field :game, Types::Game, null: false

    argument :game_id, ID, required: true, as: :id

    def resolve(id:)
      game = Game.tree.find(id)
      return unless game
      game.start_game!
      {game: game}
    end
  end
end
