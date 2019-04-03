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

ActiveRecord::Schema.define(version: 2019_04_03_015239) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.bigint "game_id"
    t.string "name"
    t.integer "location", default: 0
    t.integer "reward", default: 0
    t.integer "slug", default: 0
    t.index ["game_id", "slug"], name: "index_cards_on_game_id_and_slug"
    t.index ["game_id"], name: "index_cards_on_game_id"
  end

  create_table "dice", force: :cascade do |t|
    t.string "bag_type"
    t.bigint "bag_id"
    t.integer "value", default: 0
    t.boolean "selected"
    t.integer "slug", default: 0
    t.index ["bag_id", "bag_type", "slug"], name: "index_dice_on_bag_id_and_bag_type_and_slug"
    t.index ["bag_type", "bag_id"], name: "index_dice_on_bag_type_and_bag_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "game_state"
    t.integer "turn", default: -1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.bigint "game_id"
    t.string "name"
    t.integer "money", default: 0
    t.integer "slug", default: 0
    t.index ["game_id", "slug"], name: "index_players_on_game_id_and_slug"
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  add_foreign_key "cards", "games"
  add_foreign_key "players", "games"
end
