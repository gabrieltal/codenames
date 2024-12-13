# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :flip_card, CardType, null: false do
      argument :index, Integer, required: true
    end
    def flip_card(index:)
      Rails.logger.debug("Flipping card #{index}")
      { word: "water", flipped: false, color: "blue" }
    end
  end
end
