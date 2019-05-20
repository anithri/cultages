import { gql } from 'apollo-boost'

export const HEX_FRAGMENT = gql`
  fragment hexFragment on GridHex {
    id
    q
    r
    s
    terrain
    territory
  }
`
