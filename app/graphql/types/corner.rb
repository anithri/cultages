# frozen_string_literal: true
module Types
  class Corner < Types::BaseObject
    description 'Grid Corner'

    field :id, ID, null: false
    field :category, String, null: false

    field :x, Float, null: false
    field :y, Float, null: false
    field :z, Float, null: false


  end
end
