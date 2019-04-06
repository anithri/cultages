import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'types/cardSlot'
import { PLAYER_FRAGMENT } from 'concerns/player'
import { DICE_FRAGMENT } from 'types/dice'
import { CARD_FRAGMENT } from 'types/card'
import { GAME_FRAGMENT } from 'types/game'

export const GET_GAME = gql`
  query($gameId: ID!) {
    game(gameId: $gameId) {
      ...gameFragment
      boardSlots {
        ...cardSlotFragment
        cards {
          ...cardFragment
          dice {
            ...diceFragment
          }
        }
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
  ${CARD_FRAGMENT}
  ${CARD_SLOT_FRAGMENT}
  ${DICE_FRAGMENT}
  ${GAME_FRAGMENT}
  ${PLAYER_FRAGMENT}
`
