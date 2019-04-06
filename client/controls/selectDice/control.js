import { SELECT_DICE } from './mutation'
import { createClickControl } from '../base'

export const SelectDiceControl = args =>
  createClickControl({
    displayName: 'selectDice',
    mutation: SELECT_DICE,
    preMutation: ({ die: { id } }) => ({ diceId: id }),
    updateMutation: () => {},
    ...args,
  })
