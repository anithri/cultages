# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default
# values. The data can then be loaded with the rails db:seed command (or created alongside the
# database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

60.times do |idx|
  Card.find_or_create_by(id: idx + 1000).update(
    name:     "Card #{idx + 1000}",
    body:     'A Card',
    category: Card.categories.keys.sample
  )
end

4.times do
  result = Events::SetupGame.call
  puts result.errors
end
