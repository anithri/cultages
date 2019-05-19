import { gql } from 'apollo-boost'
import { HEX_FRAGMENT } from 'models/hex'

export const MAP_FRAGMENT = gql`
  fragment mapFragment on GridMap {
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
