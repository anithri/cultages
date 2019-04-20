import { gql } from 'apollo-boost'
import { CORNER_FRAGMENT } from 'models/corner'

export const HEX_FRAGMENT = gql`
  fragment hexFragment on Hex {
    id
    q
    r
    s
    label
    radius
    center {
      ...cornerFragment
    }
    corners {
      all: edges {
        corner: node {
          ...cornerFragment
        }
      }
    }
  }
  ${CORNER_FRAGMENT}
`
