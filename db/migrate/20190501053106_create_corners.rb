class CreateCorners < ActiveRecord::Migration[6.0]
  def change
    create_table :corners do |t|
      t.integer :direction, default: 0
      t.references :point, null: false, foreign_key: true
      t.references :hexagon, null: false, foreign_key: true
    end
  end
end
