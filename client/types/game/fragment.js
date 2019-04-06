import { gql } from 'apollo-boost'

export const GAME_FRAGMENT = gql`
  fragment gameFragment on Game {
    id
    currentPlayerId
    discardsCardCount
    drawCardCount
    selectedDice {
      id
    }
    name
    url
  }
`
