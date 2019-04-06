class CreateDice < ActiveRecord::Migration[6.0]
  def change
    create_table :dice do |t|
      t.references :player, index: true
      t.integer :value, default: 0
      t.integer :slug, default: 0
    end

    add_index :dice, [:player_id, :slug]
  end
end
