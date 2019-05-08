class CreateGridLayouts < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_layouts do |t|
      t.integer :cols, default: 16
      t.integer :rows, default: 10
      t.integer :size, default: 12
    end
  end
end
