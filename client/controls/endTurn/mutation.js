import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'

export const END_TURN = gql`
  mutation doendTurn($gameId: ID!) {
    endTurn(gameId: $gameId) {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
