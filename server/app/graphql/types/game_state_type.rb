# frozen_string_literal: true

module Types
  class GameStateType < Types::BaseObject
    field :board, [ CardType, null: true ], null: true
  end
end
