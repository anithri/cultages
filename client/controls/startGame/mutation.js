import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'types/game'
import { CARD_SLOT_FRAGMENT } from 'types/cardSlot'

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
