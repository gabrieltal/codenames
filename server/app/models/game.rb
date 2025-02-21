class Game < ApplicationRecord
    has_many :players
    has_many :cards
    has_many :logs
end