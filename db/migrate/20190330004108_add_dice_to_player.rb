class AddDiceToPlayer < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :dice, :integer, array: true, default: [1,1,1,1,1]
  end
end
