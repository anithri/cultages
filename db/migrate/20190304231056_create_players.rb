class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.integer :dice, array: true, default: [0,0,0,0,0]
      t.references :game, foreign_key: true
      t.integer :money, default: 0
      t.string :name
      t.integer :slug, default: 0
      t.timestamps
    end
  end
end
