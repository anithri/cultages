class CreateDice < ActiveRecord::Migration[6.0]
  def change
    create_table :dice do |t|
      t.references :bag, polymorphic: true, index: true
      t.integer :value, default: 0
      t.boolean :selected
      t.integer :slug, default: 0
    end

    add_index :dice, [:bag_id, :bag_type, :slug]
  end
end
