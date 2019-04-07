import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'

export const FILL_REQUIREMENT = gql`
  mutation doFillRequirement($diceRequirementId: ID!) {
    fillRequirement(diceRequirementId: $diceRequirementId) {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
