---
to: <%= queryPath('query.js') %>
---
import { gql } from 'apollo-boost'
import { <%= FRAGMENT_NAME %> } from './fragment.js'

export const <%= QUERY_NAME %> = gql`
  query <%= queryName %>($<%= idName %>: ID!) {
    <%= varName %>(<%= idName %>: $<%= idName %>) {
      ...<%= fragmentName %>,
    }
  }
  ${<%= FRAGMENT_NAME %>}
`
