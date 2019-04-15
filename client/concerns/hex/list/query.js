import { gql } from 'apollo-boost'
import {HEX_FRAGMENT} from 'models/hex'

export const GET_HEX_LIST = gql`
  query getHexList {
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
