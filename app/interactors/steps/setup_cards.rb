require 'faker'
module Steps
  class SetupCards < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      game.cards.create CardData.fresh
    end
  end
end
