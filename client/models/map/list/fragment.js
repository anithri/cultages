import { gql } from 'apollo-boost'

export const MAP_LIST_FRAGMENT = gql`
  fragment mapListFragment on GridMap {
    id
    name
  }
`
