module Steps
  class DealCards < Base
    delegate :game, to: :context
    before do
      context.fail!(message: 'No game present') unless game
    end

    def call
      Game::HandSize.times do
        game.players.each do |player|

        end
      end
    end
  end
end
