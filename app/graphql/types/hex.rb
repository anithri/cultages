# frozen_string_literal: true
module Types
  class Hex < Types::BaseObject
    description 'Hexagon'

    field :id, ID, null: false
    field :label, String, null: false

    field :size, Float, null: false
    field :row, Integer, null: false
    field :col, Integer, null: false

    field :altitudes, [Integer], null: false

    field :map, Types::Map, method: :grid_map, null: false

    field :center, Types::Point, null: false
    field :corners, [Types::Point], null: false


  end
end
