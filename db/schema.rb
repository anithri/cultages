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

ActiveRecord::Schema.define(version: 2019_05_02_000120) do

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

  create_table "corners", force: :cascade do |t|
    t.integer "direction", default: 0
    t.bigint "point_id", null: false
    t.bigint "hexagon_id", null: false
    t.index ["hexagon_id"], name: "index_corners_on_hexagon_id"
    t.index ["point_id"], name: "index_corners_on_point_id"
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
    t.bigint "grid_map_id", null: false
    t.bigint "hexagon_id", null: false
    t.integer "altitudes", default: [0, 0, 0, 0, 0, 0, 0], array: true
    t.index ["grid_map_id"], name: "index_grid_hexes_on_grid_map_id"
    t.index ["hexagon_id"], name: "index_grid_hexes_on_hexagon_id"
  end

  create_table "grid_layouts", force: :cascade do |t|
    t.integer "cols", default: 16
    t.integer "rows", default: 10
    t.integer "size", default: 12
  end

  create_table "grid_maps", force: :cascade do |t|
    t.string "name"
    t.bigint "grid_layout_id", null: false
    t.index ["grid_layout_id"], name: "index_grid_maps_on_grid_layout_id"
  end

  create_table "hexagons", force: :cascade do |t|
    t.integer "row", default: 0
    t.integer "col", default: 0
    t.integer "q", default: 0
    t.integer "r", default: 0
    t.integer "s", default: 0
    t.bigint "grid_layout_id", null: false
    t.index ["grid_layout_id"], name: "index_hexagons_on_grid_layout_id"
  end

  create_table "players", force: :cascade do |t|
    t.bigint "game_id"
    t.string "name"
    t.integer "money", default: 0
    t.integer "slug", default: 0
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  create_table "points", force: :cascade do |t|
    t.decimal "x", precision: 8, scale: 2, default: "0.0"
    t.decimal "y", precision: 8, scale: 2, default: "0.0"
    t.bigint "grid_layout_id", null: false
    t.index ["grid_layout_id"], name: "index_points_on_grid_layout_id"
  end

  add_foreign_key "cards", "games"
  add_foreign_key "corners", "hexagons"
  add_foreign_key "corners", "points"
  add_foreign_key "dice_requirements", "cards"
  add_foreign_key "dice_requirements", "dice"
  add_foreign_key "grid_hexes", "grid_maps"
  add_foreign_key "grid_hexes", "hexagons"
  add_foreign_key "grid_maps", "grid_layouts"
  add_foreign_key "hexagons", "grid_layouts"
  add_foreign_key "players", "games"
  add_foreign_key "points", "grid_layouts"
end
