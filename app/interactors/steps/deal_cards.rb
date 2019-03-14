module Steps
  class DealCards < Base
    delegate :game, to: :context
    before do
      context.fail!(message: 'No game present') unless game
    end

    def call
      game.players.each do |player|
        game.deal(player, Game::HandSize)
      end
    end
  end
end
