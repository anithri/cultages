import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'
import { PLAYER_FRAGMENT } from 'models/player'

export const SETUP_GAME = gql`
  mutation doSetupGame {
    setupGame {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
