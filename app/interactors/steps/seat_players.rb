require 'faker'
module Steps
  class SeatPlayers < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      names = Array.new(Game::NumberOfPlayers) { |_| {name: generator.player_name, } }
      game.players.create(names)
    end
  end
end
