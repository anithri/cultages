class CreateGameMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :game_maps do |t|
      t.string :name
      t.jsonb :extents, default: {x: 600, y: 800}
      t.integer :cols, default: 5
      t.integer :rows, default: 8

      t.timestamps
    end
  end
end
