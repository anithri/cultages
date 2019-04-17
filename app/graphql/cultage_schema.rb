# frozen_string_literal: true

class CultageSchema < GraphQL::Schema

  # default_max_page_size 50
  mutation(Types::MutationType)
  query(Types::QueryType)
end
