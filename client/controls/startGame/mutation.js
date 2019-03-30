import { gql } from 'apollo-boost'

export const START_GAME = gql`
  mutation doStartGame($gameId: ID!) {
    startGame(gameId: $gameId) {
      game {
        id
        url
      }
    }
  }
`
