import { gql } from 'apollo-boost'

export const DICE_LIST_FRAGMENT = gql`
  fragment diceListFragment on Dice {
    all: edges {
      dice: node {
        id
        name
        slug
      }
    }
  }
`
