# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :game_state, GameStateType, null: true
    def game_state
      {
        board: [
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
        ]
      }
    end
  end
end
