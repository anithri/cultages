import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'
import { CARD_SLOT_FRAGMENT } from 'models/cardSlot'

export const START_GAME = gql`
  mutation doStartGame($gameId: ID!) {
    startGame(gameId: $gameId) {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
