import { gql } from 'apollo-boost'

export const DICE_REQUIREMENTS_FRAGMENT = gql`
  fragment diceRequirementsFragment on DiceRequirements {
    id
    slug
    value
    dice {
      id
      theme
      value
    }
  }
`
