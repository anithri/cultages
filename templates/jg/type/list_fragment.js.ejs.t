---
to: <%= mkPath('list/fragment.js') %>
---
import { gql } from 'apollo-boost'

export const <%= LIST_FRAGMENT_NAME %> = gql`
  fragment <%= listFragmentName %> on <%= graphQLName %> {
    all: edges {
      <%= varName %>: node {
        id
        name
        slug
      }
    }
  }
`
