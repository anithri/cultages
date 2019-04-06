import { gql } from 'apollo-boost'
import { CARD_FRAGMENT } from 'types/card'
import { CARD_SLOT_FRAGMENT } from 'types/cardSlot'
import { DICE_FRAGMENT } from 'types/dice'

export const PLAYER_FRAGMENT = gql`
  fragment playerFragment on Player {
    id
    playerId: id
    playerSlot {
      ...cardSlotFragment
      cards {
        ...cardFragment
      }
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
  ${CARD_FRAGMENT}
  ${DICE_FRAGMENT}
`

export const GET_PLAYER = gql`
  query getPlayer($playerId: ID!) {
    player(playerId: $playerId) {
      ...playerFragment
    }
  }
  ${PLAYER_FRAGMENT}
`
