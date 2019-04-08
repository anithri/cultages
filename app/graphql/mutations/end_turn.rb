module Mutations
  class EndTurn < BaseMutation
    field :game, Types::Game, null: false

    argument :game_id, ID, required: true, as: :id

    def resolve(id:)
      game = Game.tree.find(id)
      return unless game
      game.next_player!
      {game: game}
    end
  end
end
