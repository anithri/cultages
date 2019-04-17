# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_17_041026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.bigint "game_id"
    t.string "name"
    t.integer "location", default: 0
    t.integer "reward", default: 0
    t.integer "slug", default: 0
    t.index ["game_id"], name: "index_cards_on_game_id"
  end

  create_table "dice", force: :cascade do |t|
    t.bigint "player_id"
    t.integer "value", default: 0
    t.integer "slug", default: 0
    t.index ["player_id", "slug"], name: "index_dice_on_player_id_and_slug"
    t.index ["player_id"], name: "index_dice_on_player_id"
  end

  create_table "dice_requirements", force: :cascade do |t|
    t.bigint "card_id"
    t.bigint "dice_id"
    t.integer "value"
    t.integer "slug", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_dice_requirements_on_card_id"
    t.index ["dice_id"], name: "index_dice_requirements_on_dice_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "game_state"
    t.integer "turn", default: -1
    t.integer "selected_dice_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "grid_hexes", force: :cascade do |t|
    t.integer "q"
    t.integer "r"
    t.integer "s"
    t.bigint "center_id"
    t.bigint "grid_map_id"
    t.index ["center_id"], name: "index_grid_hexes_on_center_id"
    t.index ["grid_map_id", "q", "r", "s"], name: "index_grid_hexes_on_grid_map_id_and_q_and_r_and_s", unique: true
    t.index ["grid_map_id"], name: "index_grid_hexes_on_grid_map_id"
  end

  create_table "grid_hexes_points", id: false, force: :cascade do |t|
    t.bigint "grid_point_id", null: false
    t.bigint "grid_hex_id", null: false
    t.index ["grid_hex_id", "grid_point_id"], name: "index_grid_hexes_points_on_grid_hex_id_and_grid_point_id"
    t.index ["grid_point_id", "grid_hex_id"], name: "index_grid_hexes_points_on_grid_point_id_and_grid_hex_id"
  end

  create_table "grid_maps", force: :cascade do |t|
    t.string "name"
    t.integer "rows"
    t.integer "cols"
    t.integer "radius"
    t.decimal "width"
    t.decimal "height"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "grid_points", force: :cascade do |t|
    t.bigint "grid_map_id"
    t.decimal "x", precision: 8, scale: 3
    t.decimal "y", precision: 8, scale: 3
    t.decimal "z", precision: 8, scale: 3
    t.integer "category", default: 0
    t.index ["grid_map_id", "x", "y"], name: "index_grid_points_on_grid_map_id_and_x_and_y", unique: true
    t.index ["grid_map_id"], name: "index_grid_points_on_grid_map_id"
  end

  create_table "players", force: :cascade do |t|
    t.bigint "game_id"
    t.string "name"
    t.integer "money", default: 0
    t.integer "slug", default: 0
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  add_foreign_key "cards", "games"
  add_foreign_key "dice_requirements", "cards"
  add_foreign_key "dice_requirements", "dice"
  add_foreign_key "grid_hexes", "grid_maps"
  add_foreign_key "grid_hexes", "grid_points", column: "center_id"
  add_foreign_key "grid_points", "grid_maps"
  add_foreign_key "players", "games"
end
