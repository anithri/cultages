import { gql } from 'apollo-boost'
import { CARD_FRAGMENT } from 'models/card'

export const CARD_SLOT_FRAGMENT = gql`
  fragment cardSlotFragment on CardSlot {
    id
    cards {
      ...cardFragment
    }
  }
  ${CARD_FRAGMENT}
`
