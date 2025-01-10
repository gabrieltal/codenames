# frozen_string_literal: true

module Types
  class CardType < Types::BaseObject
    field :word, String
    field :flipped, Boolean
    field :color, String
    field :index, Integer
  end
end
