class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name, unique: true

      t.string :game_state
      t.integer :turn, default: -1

      t.timestamps
    end
  end
end
