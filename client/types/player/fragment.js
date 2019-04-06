import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'types/cardSlot'
import { CARD_FRAGMENT } from 'types/card'
import { DICE_FRAGMENT } from 'types/dice'

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
