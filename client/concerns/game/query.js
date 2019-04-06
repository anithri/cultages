import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'

export const GET_GAME = gql`
  query($gameId: ID!) {
    game(gameId: $gameId) {
      ...gameFragment
    }
  }
  ${GAME_FRAGMENT}
`
