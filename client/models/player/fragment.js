import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'models/cardSlot'
import { CARD_FRAGMENT } from 'models/card'
import { DICE_FRAGMENT } from 'models/dice'

export const PLAYER_FRAGMENT = gql`
  fragment playerFragment on Player {
    id
    playerId: id
    playerSlot {
      ...cardSlotFragment
    }
    dice {
      ...diceFragment
    }
    money
    name
    slug
    theme
  }
  ${CARD_SLOT_FRAGMENT}
  ${DICE_FRAGMENT}
`
