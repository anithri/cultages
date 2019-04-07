module Steps
  class StartTurn < WithGameBase

    def call
      game.turn += 1
      game.current_player.roll
      game.send_message('info', game.current_player.name + ", it's your turn!")
    end
  end
end
