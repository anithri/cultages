# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default
# values. The data can then be loaded with the rails db:seed command (or created alongside the
# database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 16.times do
#   game = Events::CreateGame.call
#   game.setup_game!
# end

# (5..10).to_a.each do |row|
#   (4..8).to_a.each do |col|
#     layout = GenerateGridLayout.call rows: row, cols: col
#     CreateGridMap.call data: layout.data
#   end
# end

5.times do
  CreateGame.call
end