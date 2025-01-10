class Card < ApplicationRecord
  validates :index, :color, :word, presence: true
  validates :flipped, inclusion: [true, false]
end
