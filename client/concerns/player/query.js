import { gql } from 'apollo-boost'

export const PLAYER_FRAGMENT = gql`
  fragment playerFragment on Player {
    id
    playerId: id
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
`

export const GET_PLAYER = gql`
  query getPlayer($playerId: ID!) {
    player(playerId: $playerId) {
      ...playerFragment
    }
  }
  ${PLAYER_FRAGMENT}
`
