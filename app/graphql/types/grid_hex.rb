# frozen_string_literal: true
module Types
  class GridHex < Types::BaseObject
    description 'Gridhex'

    field :id, ID, null: false
    field :label, String, null: false
    field :q, Integer, null: false
    field :r, Integer, null: false
    field :s, Integer, null: false
    field :center, GridPoint, null: false
    field :corners, GridPoint.connection_type, null: false
  end
end
