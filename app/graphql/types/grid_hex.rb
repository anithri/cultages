# frozen_string_literal: true
module Types
  class GridHex < Types::BaseObject
    description 'Hexagon'

    field :id, ID, null: false
    field :label, String, null: false

    field :q, Integer, null: false
    field :r, Integer, null: false
    field :s, Integer, null: false

    field :map, Types::GridMap, method: :grid_map, null: false

  end
end
