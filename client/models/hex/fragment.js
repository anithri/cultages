import {gql} from 'apollo-boost'

export const HEX_FRAGMENT = gql`
  fragment hexFragment on Hex {
    id
    label
    altitude
    x
    y
  }
`
