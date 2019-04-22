---
to: <%= listFragmentPath %>
---
import { gql } from 'apollo-boost'

export const <%= LIST_FRAGMENT_NAME %> = gql`
  fragment <%= listFragmentName %> on <%= listGraphqlName %> {
    id
    name
  }
`
