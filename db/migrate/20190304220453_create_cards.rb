class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.references :game, foreign_key: true
      t.string :name
      t.integer :location, default: 0
      t.integer :reward, default: 0
      t.integer :slug, default: 0
    end
  end
end
