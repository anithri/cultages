# frozen_string_literal: true
module Types
  class Message < Types::BaseObject
    description 'Message Type'

    field :type, String, null: false
    field :body, String, null: true
  end
end
