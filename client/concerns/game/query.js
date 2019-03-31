import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'concerns/cardSlot'
import { PLAYER_FRAGMENT } from 'concerns/player'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    currentPlayerId
    discardsCardCount
    drawCardCount
    name
    url
  }
`
export const GET_GAME = gql`
  query($gameId: ID!) {
    game(gameId: $gameId) {
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
  ${CARD_SLOT_FRAGMENT}
  ${GAME_FRAGMENT}
  ${PLAYER_FRAGMENT}
`
