module Steps
  class DealCards < WithGameBase
    def call
      game.players.each do |player|
        game.deal(player, Game::HandSize)
      end
    end
  end
end
