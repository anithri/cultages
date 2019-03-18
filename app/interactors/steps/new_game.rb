module Steps
  class NewGame < Base

    delegate :generator, to: :context
    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      context.game ||= Game.create(
        name: generator.game_name,
      )
    end
  end
end
