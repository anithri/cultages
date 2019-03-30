module Mutations
  class StartGame < BaseMutation
    field :game, Types::Game, null: true

    argument :game_id, ID, required: true, as: :id

    def resolve(id:)
      game = Game.find(id)
      return unless game
      game.start_game!
      game.next_player!
      {game: game}
    end
  end
end
