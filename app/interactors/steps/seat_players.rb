require 'faker'
module Steps
  class SeatPlayers < Base
    delegate :game, :generator, to: :context

    before do
      context.fail!(message: 'No Game') unless game && generator
    end

    def call
      game.players = Array.new(Player::PER_GAME) do |idx|
        Player.new(
          name:      generator.player_name,
          sortOrder: idx,
        )
      end
    end
  end
end
