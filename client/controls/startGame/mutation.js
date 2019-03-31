import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'concerns/game'
import { CARD_SLOT_FRAGMENT } from 'concerns/cardSlot'
import { PLAYER_FRAGMENT } from '../../concerns/player'

export const START_GAME = gql`
  mutation doStartGame($gameId: ID!) {
    startGame(gameId: $gameId) {
      game {
        ...gameFragment
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
    }
  }
  ${CARD_SLOT_FRAGMENT}
  ${GAME_FRAGMENT}
  ${PLAYER_FRAGMENT}
`
