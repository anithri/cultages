class CreatePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :points do |t|
      t.decimal :x, precision: 8, scale: 2, default: 0
      t.decimal :y, precision: 8, scale: 2, default: 0
      t.references :grid_layout, null: false, foreign_key: true
    end
  end
end
