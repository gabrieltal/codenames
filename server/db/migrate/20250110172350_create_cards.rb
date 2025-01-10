class CreateCards < ActiveRecord::Migration[7.2]
  def change
    create_table :cards do |t|
      t.boolean :flipped, default: false, null: false
      t.integer :index, null: false
      t.string :color, null: false
      t.string :word, null: false
    end
  end
end
