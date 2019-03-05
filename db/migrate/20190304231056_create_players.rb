class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :sort_order, default: 0
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
