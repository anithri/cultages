import { gql } from 'apollo-boost'

export const CARD_FRAGMENT = gql`
  fragment cardFragment on Card {
    id
    name
    slug
  }
`
