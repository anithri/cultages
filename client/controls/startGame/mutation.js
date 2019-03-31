import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'concerns/game'
import { CARD_SLOT_FRAGMENT } from 'concerns/cardSlot'

export const START_GAME = gql`
  mutation doStartGame($gameId: ID!) {
    startGame(gameId: $gameId) {
      game {
        ...gameFragment
        boardSlots {
          ...cardSlotFragment
        }
      }
    }
  }
  ${GAME_FRAGMENT}
  ${CARD_SLOT_FRAGMENT}
`
