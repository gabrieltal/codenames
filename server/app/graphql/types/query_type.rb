# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :game, GameType, null: true do
      argument :id, Int
    end
    def game(id:)
      Game.find(id)
    end
  end
end
