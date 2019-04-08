require 'faker'
module Steps
  class SeatPlayers < WithGameBase
    delegate :generator, to: :context

    before do
      context.generator ||= Steps::Faker.random
    end

    def call
      names = Player::PLAYERS.each_with_index.map do |slug, idx|
        {
          name:  generator.player_name,
          money: Player::STARTING_MONEY + 3 - idx,
          slug:  slug,
          dice:  Dice.bag(Player::DICE_BAG_SIZE)
        }
      end
      game.players.create(names)
    end
  end
end
