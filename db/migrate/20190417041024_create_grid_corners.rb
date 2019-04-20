class CreateGridCorners < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_corners do |t|
      t.references :grid_map, foreign_key: true
      t.decimal :x, precision: 8, scale: 3
      t.decimal :y, precision: 8, scale: 3
      t.decimal :z, precision: 8, scale: 3
      t.integer :category, default: 0
    end
    add_index :grid_corners, [:grid_map_id, :x, :y], unique: true

  end
end
