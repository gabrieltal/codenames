module Types
    class GameType < Types::BaseObject
        field :url_identifier, String, null: false
        field :players, [ PlayerType, null: false ], null: false
        field :logs, [ LogType, null: false], null: false
        field :cards, [ CardType, null: false], null: false
    end
end