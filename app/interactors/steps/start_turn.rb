module Steps
  class StartTurn < WithGameBase

    def call
      game.turn += 1
      game.current_player.roll
    end
  end
end
