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

ActiveRecord::Schema.define(version: 2019_03_04_233703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_locations", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "card_id"
    t.bigint "player_id"
    t.integer "sort_order", default: 0
    t.integer "purpose", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_card_locations_on_card_id"
    t.index ["game_id"], name: "index_card_locations_on_game_id"
    t.index ["player_id"], name: "index_card_locations_on_player_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.text "body"
    t.integer "category", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "game_state"
    t.integer "turn", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "sort_order", default: 0
    t.bigint "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  add_foreign_key "card_locations", "cards"
  add_foreign_key "card_locations", "games"
  add_foreign_key "card_locations", "players"
  add_foreign_key "players", "games"
end
