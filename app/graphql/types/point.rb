# frozen_string_literal: true
module Types
  class Point < Types::BaseObject
    description 'Point'
    field :x, Integer, null: false
    field :y, Integer, null: false
  end
end
