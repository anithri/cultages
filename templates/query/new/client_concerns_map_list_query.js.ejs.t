---
to: client/concerns/<%= name.toLowerCase() %>/list/query.js
---
import { gql } from 'apollo-boost'
import { <%= name.toUpperCase() %>_LIST_FRAGMENT } from 'models/<%= name.toLowerCase() %>'

export const GET_<%= name.toUpperCase() %>_LIST = gql`
  query getMapList {
    <%= name.toLowerCase() %>s {
      all: edges {
        <%= name.toLowerCase() %>: node {
          ...<%= name.toLowerCase() %>ListFragment
        }
      }
    }
  }
  ${<%= name.toUpperCase() %>_LIST_FRAGMENT}
`
