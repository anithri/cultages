import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'models/cardSlot'
import { PLAYER_FRAGMENT } from 'models/player'
import { DICE_FRAGMENT } from 'models/dice'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    currentPlayerId
    discardsCardCount
    drawCardCount
    selectedDice {
      ...diceFragment
    }
    name
    url
    boardSlots {
      ...cardSlotFragment
    }
    players {
      all: edges {
        player: node {
          ...playerFragment
        }
      }
    }
  }
  ${CARD_SLOT_FRAGMENT}
  ${PLAYER_FRAGMENT}
  ${DICE_FRAGMENT}
`
