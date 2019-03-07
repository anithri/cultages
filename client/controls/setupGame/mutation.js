import { gql } from 'apollo-boost'

export const SETUP_GAME = gql`
  mutation doSetupGame {
    setupGame {
      game {
        id
        url
      }
    }
  }
`
