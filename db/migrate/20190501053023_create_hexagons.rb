class CreateHexagons < ActiveRecord::Migration[6.0]
  def change
    create_table :hexagons do |t|
      t.integer :row, default: 0
      t.integer :col, default: 0
      t.integer :q, default: 0
      t.integer :r, default: 0
      t.integer :s, default: 0
      t.references :grid, null: false, foreign_key: true
    end
  end
end
