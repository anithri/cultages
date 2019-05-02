class CreateGridHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_hexes do |t|
      t.references :grid_map, null: false, foreign_key: true
      t.references :hexagon, null: false, foreign_key: true
      t.integer :altitudes, array: true, default: [0,0,0,0,0,0,0]
    end
  end
end
