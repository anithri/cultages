import { gql } from 'apollo-boost'

export const CORNER_FRAGMENT = gql`
  fragment cornerFragment on Corner {
    id
    x
    y
    z
    category
  }
`
