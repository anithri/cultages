import { gql } from 'apollo-boost'

export const DICE_REQUIREMENT_LIST_FRAGMENT = gql`
  fragment diceRequirementListFragment on DiceRequirement {
    all: edges {
      diceRequirement: node {
        id
        name
        slug
      }
    }
  }
`
