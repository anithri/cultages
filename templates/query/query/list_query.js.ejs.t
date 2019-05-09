---
to: <%= queryListPath('query.js') %>
---
import { gql } from 'apollo-boost'
import { <%= FRAGMENT_NAME %> } from './fragment.js'

export const <%= QUERY_NAME %> = gql`
  query queryName {
    <%= pluralVar %> {
      all: edges {
        <%= varName %>: node {
          ...<%= fragmentName %>
        }
      }
    }
  }
  ${<%= FRAGMENT_NAME %>}
`
