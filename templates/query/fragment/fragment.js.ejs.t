---
to: <%= pathFor('fragment.js') %>
---
import { gql } from 'apollo-boost'

export const <%= FRAGMENT_NAME %> = gql`
  fragment <%= fragmentName %> on <%= graphQLName %> {
    id
    name
  }
`
