# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :game_state, GameStateType, null: true
    def game_state
      {
        board: Card.all.order(index: :asc)
      }
    end
  end
end
