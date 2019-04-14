class CreateGridPoints < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_points do |t|
      t.decimal :x, precision: 8, scale: 3
      t.decimal :y, precision: 8, scale: 3
      t.decimal :z, precision: 8, scale: 3
      t.integer :category, default: 0

      t.timestamps
    end
  end
end
