import { gql } from 'apollo-boost'
import { MAP_LIST_FRAGMENT } from 'models/map'

export const GET_MAP_LIST = gql`
  query getMapList {
    maps {
      all: edges {
        map: node {
          ...mapListFragment
        }
      }
    }
  }
  ${MAP_LIST_FRAGMENT}
`
