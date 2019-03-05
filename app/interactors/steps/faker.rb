require 'faker'
module Steps
  class Faker
    GENERATORS = [
      [::Faker::Movies::HarryPotter, :character, :location],
      [::Faker::Movies::HitchhikersGuideToTheGalaxy, :character, :location],
      [::Faker::Movies::Hobbit, :character, :location],
      [::Faker::Movies::LordOfTheRings, :character, :location],
      [::Faker::Movies::StarWars, :character, :planet],
      [::Faker::TvShows::Buffy, :character, :episode],
      [::Faker::TvShows::DrWho, :character, :specie],
      [::Faker::TvShows::FamilyGuy, :character, :location],
      [::Faker::TvShows::Seinfeld, :character, :business],
      [::Faker::TvShows::Simpsons, :character, :location],
      [::Faker::TvShows::StarTrek, :character, :location],
      [::Faker::TvShows::Stargate, :character, :planet],
      [::Faker::TvShows::TwinPeaks, :character, :location],
      [::Faker::TvShows::VentureBros, :character, :organization],
    ]

    attr_reader :generator, :player_method, :game_method

    def initialize(generator, player_method, game_method)
      @generator     = generator
      @player_method = player_method
      @game_method   = game_method
    end

    def game_name
      generator.send(game_method)
    end

    def player_name
      generator.send(player_method)
    end

    def self.random
      self.new(*GENERATORS.sample)
    end
  end
end
