import { gql } from 'apollo-boost'
import { GAME_FRAGMENT } from 'models/game'
import { CARD_SLOT_FRAGMENT } from 'models/cardSlot'

export const SELECT_DICE = gql`
  mutation doSelectDice($diceId: ID!) {
    selectDice(diceId: $diceId) {
      game {
        ...gameFragment
      }
    }
  }
  ${GAME_FRAGMENT}
`
