import { gql } from 'apollo-boost'
import { HEX_FRAGMENT } from 'models/hex'

export const MAP_FRAGMENT = gql`
  fragment mapFragment on Map {
    id
    name
    radius
    width
    height
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
