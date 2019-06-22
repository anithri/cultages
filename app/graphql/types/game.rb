# frozen_string_literal: true
module Types
  class Game < Types::BaseObject
    description 'Game'

    field :id, ID, null: false
    field :name, String, null: true
  end
end
+