import { gql } from 'apollo-boost'

export const GRID_MAP_LIST_FRAGMENT = gql`
  fragment gridMapListFragment on GridMap {
    id
    name
  }
`
