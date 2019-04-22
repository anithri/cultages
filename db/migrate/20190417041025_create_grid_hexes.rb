class CreateGridHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_hexes do |t|
      t.references :grid_map, foreign_key: true
      t.integer :altitudes, array: true, default: [0, 0, 0, 0, 0, 0]
      t.integer :altitude, default: 0
      t.integer :x, default: 0
      t.integer :y, default: 0
    end
    add_index :grid_hexes, [:grid_map_id, :x, :y], unique: true
  end
end
