import { gql } from 'apollo-boost'
import { GRID_MAP_LIST_FRAGMENT } from './fragment'

export const GET_GRID_MAP_LIST = gql`
  query getGridMapList {
    gridMaps {
      all: edges {
        gridMap: node {
          ...gridMapListFragment
        }
      }
    }
  }
  ${GRID_MAP_LIST_FRAGMENT}
`
