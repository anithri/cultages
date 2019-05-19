import { gql } from 'apollo-boost'
import { GRID_MAP_FRAGMENT } from './fragment'

export const GET_GRID_MAP = gql`
  query getGridMap($gridMapId: ID!) {
    gridMap(gridMapId: $gridMapId) {
      ...gridMapFragment
    }
  }
  ${GRID_MAP_FRAGMENT}
`
