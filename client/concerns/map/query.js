import { gql } from 'apollo-boost'
import { MAP_FRAGMENT } from 'models/map'

export const GET_MAP = gql`
  query getMapList($mapId: ID!) {
    map(mapId: $mapId) {
      ...mapFragment
    }
  }
  ${MAP_FRAGMENT}
`
