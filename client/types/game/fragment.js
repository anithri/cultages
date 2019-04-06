import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'types/cardSlot'
import { PLAYER_FRAGMENT } from 'types/player'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    currentPlayerId
    discardsCardCount
    drawCardCount
    selectedDice {
      id
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
`
