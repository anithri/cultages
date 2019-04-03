class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.references :game, foreign_key: true
      t.string :name
      t.integer :money, default: 0
      t.integer :slug, default: 0
    end
    add_index :players, [:game_id, :slug]
  end
end
