require 'faker'
module Steps
  class SeatPlayers < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      game.players.create Array.new(Game::NumberOfPlayers) do |idx|
        {
          name:      generator.player_name,
        }
      end
    end
  end
end
