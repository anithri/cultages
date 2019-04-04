class CreateDiceRequirements < ActiveRecord::Migration[6.0]
  def change
    create_table :dice_requirements do |t|
      t.references :card, foreign_key: true
      t.references :dice, foreign_key: true, optional: true
      t.integer :value
      t.integer :slug, default: 0
      t.timestamps
    end
  end
end
