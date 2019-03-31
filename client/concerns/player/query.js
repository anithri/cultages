import { gql } from 'apollo-boost'

export const GET_PLAYER = gql`
  query getPlayer($playerId: ID!) {
    player(playerId: $playerId) {
      id
      playerSlot {
        cards {
          id
          name
          dice
        }
      }
      dice
      money
      name
      slug
      theme
    }
  }
`
