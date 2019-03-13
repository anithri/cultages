require 'faker'
module Steps
  class SeatPlayers < Base
    delegate :game, :generator, to: :context

    before do
      context.fail!(message: 'No Game') unless game && generator
    end

    def call
      game.players = Array.new(Game::NumberOfPlayers) do |idx|
        Player.new(
          name:      generator.player_name,
          sort_order: idx + 1,
        )
      end
    end
  end
end
