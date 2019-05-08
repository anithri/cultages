# frozen_string_literal: true
module Types
  class GridMap < Types::BaseObject
    description 'Grid Map'

    field :id, ID, null: false
    field :name, String, null: true

    field :cols, Integer, null: false
    field :rows, Integer, null: false
    field :flat, Boolean, null: true
    field :size, Integer, null: false

    field :hexes, GridHex.connection_type, method: :grid_hexes, null: false
  end
end
