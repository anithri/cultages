class CreateCardLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :card_locations do |t|
      t.references :game, foreign_key: true
      t.references :card, foreign_key: true
      t.references :player, foreign_key: true

      t.integer :sortOrder, default: 0
      t.integer :purpose, default: 0

      t.timestamps
    end
  end
end
