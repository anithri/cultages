import { gql } from 'apollo-boost'
import { DICE_REQUIREMENT_FRAGMENT } from 'models/diceRequirement'

export const CARD_FRAGMENT = gql`
  fragment cardFragment on Card {
    id
    name
    slug
    diceRequirements {
      ...diceRequirementFragment
    }
  }
  ${DICE_REQUIREMENT_FRAGMENT}
`
