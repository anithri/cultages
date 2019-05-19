import { gql } from 'apollo-boost'
import { HEX_FRAGMENT } from 'models/hex'

export const GRID_MAP_FRAGMENT = gql`
  fragment gridMapFragment on GridMap {
    id
    name
    size
    cols
    rows
    hexes {
      all: edges {
        hex: node {
          ...hexFragment
        }
      }
    }
  }
  ${HEX_FRAGMENT}
`
