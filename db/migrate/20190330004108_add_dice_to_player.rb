class AddDiceToPlayer < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :dice, :integer, array: true, default: [0,0,0,0,0]
  end
end
