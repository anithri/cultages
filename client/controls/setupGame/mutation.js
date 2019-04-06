import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'types/game'
import { PLAYER_FRAGMENT } from 'types/player'

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
