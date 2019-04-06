import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'types/game'
import { PLAYER_FRAGMENT } from 'concerns/player'

export const SETUP_GAME = gql`
  mutation doSetupGame {
    setupGame {
      game {
        ...gameFragment
        players {
          all: edges {
            player: node {
              ...playerFragment
            }
          }
        }
      }
    }
  }
  ${GAME_FRAGMENT}
  ${PLAYER_FRAGMENT}
`
