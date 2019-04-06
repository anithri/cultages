import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'
import { CARD_SLOT_FRAGMENT } from 'models/cardSlot'

export const SELECT_DICE_REQUIREMENT = gql`
  mutation doSelectDiceRequirement($diceRequirementId: ID!) {
    selectDice(diceRequirementId: $diceRequirementId) {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
