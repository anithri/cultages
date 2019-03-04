# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :woot, String, null: false
    def woot
      'Wooticus Prime'
    end

    # last of fields
  end
end
