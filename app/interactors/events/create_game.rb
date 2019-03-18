module Events
  module CreateGame
    def self.call
      @game = Game.new(name: Steps::Faker.random.game_name)
    end
  end
end
