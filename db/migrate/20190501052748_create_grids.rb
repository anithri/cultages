class CreateGrids < ActiveRecord::Migration[6.0]
  def change
    create_table :grids do |t|
      t.string :name
      t.integer :cols, default: 16
      t.integer :rows, default: 9
      t.integer :size, default: 12
    end
  end
end
