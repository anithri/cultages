import { gql } from 'apollo-boost'

export const CARD_SLOT_FRAGMENT = gql`
  fragment cardSlotFragment on CardSlot {
    id
    cards {
      id
      name
      dice {
        id
        selected
        slug
        theme
        value
      }
    }
  }
`
