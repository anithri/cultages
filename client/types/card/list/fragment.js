import { gql } from 'apollo-boost'

export const CARD_LIST_FRAGMENT = gql`
  fragment cardListFragment on Card {
    all: edges {
      card: node {
        id
        name
        slug
      }
    }
  }
`
