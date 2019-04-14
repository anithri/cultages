class CreateJoinTableGridPointsHexes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :grid_points, :grid_hexes do |t|
      t.index [:grid_point_id, :grid_hex_id]
      t.index [:grid_hex_id, :grid_point_id]
    end
  end
end
