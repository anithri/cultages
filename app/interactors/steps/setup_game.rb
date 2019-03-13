module Steps
  class SetupGame < Base

    delegate :generator, to: :context
    before do
      context.generator = Steps::Faker.random
    end

    def call
      context.game = Game.new(
        name: generator.game_name,
      )
      context.game.setup_game
    end
  end
end
