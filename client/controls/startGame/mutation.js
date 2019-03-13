import { gql } from 'apollo-boost'

export const START_GAME = gql`
  mutation doStartGame {
    startGame {
      game {
        id
        url
      }
    }
  }
`
