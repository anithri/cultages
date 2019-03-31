import { gql } from 'apollo-boost'
import { CARD_SLOT_FRAGMENT } from 'concerns/cardSlot'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    name
    url
    currentPlayerId
    players {
      all: edges {
        player: node {
          playerId: id
          slug
          dice
        }
      }
    }
    discardsCardCount
    drawCardCount
  }
`
export const GET_GAME = gql`
  query($gameId: ID!) {
    game(gameId: $gameId) {
      ...gameFragment
      boardSlots {
        ...cardSlotFragment
      }
    }
  }
  ${GAME_FRAGMENT}
  ${CARD_SLOT_FRAGMENT}
`
