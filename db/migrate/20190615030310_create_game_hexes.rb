class CreateGameHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :game_hexes do |t|
      t.integer :q
      t.integer :r
      t.integer :s
      t.integer :order
      t.integer :terrain
      t.integer :territory
      t.references :game_map, null: false, foreign_key: true

      t.timestamps
    end
  end
end
