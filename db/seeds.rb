# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default
# values. The data can then be loaded with the rails db:seed command (or created alongside the
# database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.create(
  Array.new(60) do |idx|
    {
      name:     "Card #{idx + 1000}",
      body:     'A Card',
      category: Card.categories.keys.sample
    }
  end
)

4.times do
  game = Events::CreateGame.call
  game.setup_game!

end
