# frozen_string_literal: true
module Types
  class Card < Types::BaseObject
    description 'Card'

    field :id, ID, null: false
    field :name, String, null: false
    field :body, String, null: true
    field :category, Types::CardCategoryEnum, null: false
  end
end
