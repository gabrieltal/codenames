module Types
    class PlayerType < Types::BaseObject
        field :name, String, null: false
        field :spy_master, Boolean, null: false
        field :team, String, null: false
    end
end