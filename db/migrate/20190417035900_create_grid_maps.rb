class CreateGridMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_maps do |t|
      t.integer :cols
      t.string :name
      t.jsonb :origin, default: { x: 0, y: 0, z: 0 }
      t.integer :radius
      t.integer :rows
      t.timestamps
    end
  end
end
