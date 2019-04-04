import { gql } from 'apollo-boost'

export const DICE_FRAGMENT = gql`
  fragment diceFragment on Dice {
    id
    name
    slug
  }
`
