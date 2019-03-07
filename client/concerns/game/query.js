import { gql } from 'apollo-boost'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    name
    url
    players {
      all: edges {
        player: node {
          playerId: id
          slug
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
    }
  }
  ${GAME_FRAGMENT}
`
