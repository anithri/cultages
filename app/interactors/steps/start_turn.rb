module Steps
  class StartTurn < WithGameBase

    def call
      game.turn += 1
    end
  end
end
