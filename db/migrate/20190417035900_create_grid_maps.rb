class CreateGridMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_maps do |t|
      t.string :name
      t.integer :rows
      t.integer :cols
      t.integer :radius
      t.decimal :width
      t.decimal :height

      t.timestamps
    end
  end
end
