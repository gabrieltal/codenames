class CreateTables < ActiveRecord::Migration[7.2]
  def change
    create_table :games do |t|
      t.string :url_identifier, null: false

      t.timestamps
    end

    create_table :players do |t|
      t.string :name, null: false
      t.boolean :spy_master, null: false
      t.string :team, null: false
      t.belongs_to :game, null: false
    end

    create_table :cards do |t|
      t.boolean :flipped, default: false, null: false
      t.integer :index, null: false
      t.string :color, null: false
      t.string :word, null: false
      t.belongs_to :game, null: false
    end

    create_table :logs do |t|
      t.string :player_name, null: true
      t.belongs_to :game, null: false
      t.string :clue, null: true
      t.string :message, null: true
      t.string :winning_team, null: true

      t.timestamps
    end
  end
end
