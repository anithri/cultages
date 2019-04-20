class CreateJoinTableGridCornersGridHexes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :grid_corners, :grid_hexes do |t|
      t.index [:grid_corner_id, :grid_hex_id]
      t.index [:grid_hex_id, :grid_corner_id]
    end
  end
end
