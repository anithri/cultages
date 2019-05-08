class CreateGridHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_hexes do |t|
      t.integer :q
      t.integer :r
      t.integer :s
      t.references :grid_map, null: false, foreign_key: true

      t.timestamps
    end
  end
end
