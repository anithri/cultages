require 'faker'
module Steps
  class SeatPlayers < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
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
