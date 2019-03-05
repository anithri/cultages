import { gql } from 'apollo-boost'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    name
    players {
      all: edges {
        player: node {
          playerId: id
        }
      }
    }
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
