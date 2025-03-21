# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

game = Game.create!(url_identifier: 'smoke-tree-nut')
[
  { name: 'liv', spy_master: true, team: 'blue', game: },
  { name: 'gabe', spy_master: true, team: 'orange', game: },
  { name: 'Christine', spy_master: false, team: 'blue', game: },
  { name: 'alex', spy_master: false, team: 'orange', game: },
].each do |player|
  Player.create!(**player)
end

[
  { word: "water", flipped: false, color: "blue" },
  { word: "dog", flipped: false, color: "black" },
  { word: "bye", flipped: false, color: "orange" },
  { word: "bark", flipped: false, color: "biege" },
  { word: "tea", flipped: false, color: "blue" },
  { word: "plant", flipped: false, color: "biege" },
  { word: "cry", flipped: false, color: "orange" },
  { word: "bee", flipped: false, color: "blue" },
  { word: "broccoli", flipped: false, color: "blue" },
  { word: "leaf", flipped: false, color: "biege" },
  { word: "fly", flipped: false, color: "orange" },
  { word: "woof", flipped: false, color: "biege" },
  { word: "ron burgundy", flipped: false, color: "orange" },
  { word: "orange", flipped: false, color: "biege" },
  { word: "honey", flipped: false, color: "blue" },
  { word: "hello", flipped: false, color: "orange" },
  { word: "tree", flipped: false, color: "biege" },
  { word: "harrison ford", flipped: false, color: "orange" },
  { word: "apple", flipped: false, color: "biege" },
  { word: "phone", flipped: false, color: "blue" },
  { word: "cat", flipped: false, color: "blue" },
  { word: "shrink", flipped: false, color: "orange" },
  { word: "sleep", flipped: false, color: "orange" },
  { word: "ghost", flipped: false, color: "orange" },
  { word: "meow", flipped: false, color: "blue" }
].each_with_index do |obj, index|
  Card.create!(game:, **obj.merge(index:))
end

[
  { player_name: "liv", message: "gives clue", clue: "wet 1" },
  { player_name: "christine", message: "taps", guess: "water" },
  { player_name: "christine", message: "taps", guess: "leaf" },
  { player_name: "christine", message: "ends guessing" },
  { player_name: "gabe", message: "gives clue", clue: "small 3" },
  { player_name: "alex", message: "taps", guess: "shrink" },
  { player_name: "alex", message: "taps", guess: "dog" },
  { message: "blue team wins!" },
  { message: "orange team wins!" }
].each_with_index do | obj, index|
  Log.create!(game:, **obj.merge(index:))
end
