# frozen_string_literal: true
module Types
  class Hexagon < Types::BaseObject
    description 'Hexagon'

    field :id, ID, null: false
    field :altitude, Integer, null: false
    field :altitudes, [Integer], null: false
    field :label, String, null: false
    field :radius, Float, null: false
    field :x, Integer, null: false
    field :y, Integer, null: false
  end
end
