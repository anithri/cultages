import { gql } from 'apollo-boost'

export const GET_PLAYER = gql`
  query getPlayer($playerId: ID!) {
    player(playerId: $playerId) {
      playerId: id
      name
    }
  }
`
