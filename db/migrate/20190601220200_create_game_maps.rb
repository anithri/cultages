class CreateGameMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :game_maps do |t|
      t.string :name
      t.decimal8 :extents
      t.decimal2 :extents

      t.timestamps
    end
  end
end
