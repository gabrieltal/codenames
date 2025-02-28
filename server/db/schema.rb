# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2025_02_21_160845) do
  create_table "cards", force: :cascade do |t|
    t.boolean "flipped", default: false, null: false
    t.integer "index", null: false
    t.string "color", null: false
    t.string "word", null: false
    t.integer "game_id", null: false
    t.index ["game_id"], name: "index_cards_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "url_identifier", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logs", force: :cascade do |t|
    t.string "player_name"
    t.integer "game_id", null: false
    t.string "clue"
    t.string "message"
    t.string "guess"
    t.string "winning_team"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_logs_on_game_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "spy_master", null: false
    t.string "team", null: false
    t.integer "game_id", null: false
    t.index ["game_id"], name: "index_players_on_game_id"
  end
end
