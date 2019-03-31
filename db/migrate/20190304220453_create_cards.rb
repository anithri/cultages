class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :dice, array: true, default: []
      t.references :game, foreign_key: true
      t.integer :location, default: 0
      t.integer :reward, default: 0
      t.integer :sequence, default: 0
      t.timestamps
    end
  end
end
