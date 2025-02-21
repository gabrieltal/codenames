module Types
    class LogType < Types::BaseObject
        field :player, String, null: true
        field :clue, String, null: true
        field :message, String, null: true
        field :winning_team, String, null: true
    end
end