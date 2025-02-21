class Card < ApplicationRecord
  belongs_to :game
  validates :index, :color, :word, presence: true
  validates :flipped, inclusion: [true, false]
end
