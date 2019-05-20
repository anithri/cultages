class CreateGridMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_maps do |t|
      t.string :name
      t.integer :cols
      t.integer :rows
      t.integer :size
      t.boolean :flat, default: false

      t.timestamps
    end
  end
end
