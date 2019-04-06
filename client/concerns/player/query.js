import { gql } from 'apollo-boost'
import { PLAYER_FRAGMENT } from 'types/player'

export const GET_PLAYER = gql`
  query getPlayer($playerId: ID!) {
    player(playerId: $playerId) {
      ...playerFragment
    }
  }
  ${PLAYER_FRAGMENT}
`
