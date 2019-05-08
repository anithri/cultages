class CreateGridMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_maps do |t|
      t.string :name
      t.references :grid_layout, null: false, foreign_key: true
    end
  end
end
