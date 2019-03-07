module Mutations
  class SetupGame < BaseMutation
    field :game, Types::Game, null: true

    def resolve
      r = Events::SetupGame.call
      if r.failure?
        {game: nil, errors: r.error ? [r.error] : []}
      else
        {errors: r.errors, game: r.game}
      end
    end
  end
end
