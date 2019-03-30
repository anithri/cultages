require 'faker'
module Steps
  class SeatPlayers < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      names = Array.new(Game::NumberOfPlayers) do |idx|
        {name: generator.player_name, sort_order: idx + 1, dice: Array.new(5) { rand(6) + 1 }}
      end
      game.players.create(names)
    end
  end
end
