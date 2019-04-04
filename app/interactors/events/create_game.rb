module Events
  module CreateGame
    def self.call
      Game.create(name: Steps::Faker.random.game_name)
    end
  end
end
