# frozen_string_literal: true
module Types
  class Map < Types::BaseObject
    description 'Grid Map'

    field :id, ID, null: false
    field :name, String, null: true

    field :cols, Integer, null: false
    field :rows, Integer, null: false
    field :radius, Integer, null: false
    field :origin, Vector3, null: false

    field :hexes, Hex.connection_type, null: false
    # field :roads, GridNetwork.connection_type, null: false
    # field :rivers, GridNetwork.connection_type, null: false
    # field :borders, GridNetwork.connection_type, null: false
    # field :networks, GridNetwork.connection_type, null: false
    # field :features, GridPoint.connection_type, null: false

  end
end
