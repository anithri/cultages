module Steps
  class StartTurn < WithGameBase

    def call
      game.turn += 1
      player = game.current_player

    end
  end
end
