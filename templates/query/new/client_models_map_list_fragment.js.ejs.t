---
to: client/models/<%= name.toLowerCase() %>/list/fragment.js
---
import { gql } from 'apollo-boost'

export const <%= name.toUpperCase() %>_LIST_FRAGMENT = gql`
  fragment <%= name.toLowerCase() %>ListFragment on <%= h.capitalize(name) %> {
    id
    name
  }
`
