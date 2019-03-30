class AddMoneyToPlayer < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :money, :integer, default: 0
  end
end
