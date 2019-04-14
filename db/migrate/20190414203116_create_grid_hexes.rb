class CreateGridHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :grid_hexes do |t|
      t.integer :q
      t.integer :r
      t.integer :s
      t.references :center, foreign_key: {to_table: :grid_points}
    end
  end
end
