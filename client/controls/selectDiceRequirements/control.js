import { SELECT_DICE } from './mutation'
import { createClickControl } from '../base'

export const SelectDiceRequirementControl = args =>
  createClickControl({
    displayName: 'selectDice',
    mutation: SELECT_DICE,
    preMutation: ({ die: { id } }) => {
      diceId: id
    },
    ...args,
  })
