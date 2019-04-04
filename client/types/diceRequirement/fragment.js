import { gql } from 'apollo-boost'

export const DICE_REQUIREMENT_FRAGMENT = gql`
  fragment diceRequirementFragment on DiceRequirement {
    id
    name
    slug
  }
`
