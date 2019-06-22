class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :state, default: 'in_box'
      t.jsonb :options, default: {}

      t.timestamps
    end
  end
end
