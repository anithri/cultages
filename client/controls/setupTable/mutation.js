import { gql } from 'apollo-boost'

export const SETUP_TABLE = gql`
  mutation doSetupTable {
    setupTable {
      game {
        id
      }
    }
  }
`
