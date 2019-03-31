module Steps
  class DealCards < WithGameBase
    def call
      game.players.each do |player|
        game.deal(Game::HandSize, to: player.slug)
      end
      Card::DEAL_CARDS.each_pair do |location, count|
        next if count.zero?
        game.deal(count, to: location)
      end
    end
  end
end
