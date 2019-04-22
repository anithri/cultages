# frozen_string_literal: true
module Types
  class Vector3 < Types::BaseObject
    description 'Vector3'

    field :x, Integer, null: false
    field :y, Integer, null: false
    field :z, Integer, null: false
  end
end
