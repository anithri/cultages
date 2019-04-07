import { FILL_REQUIREMENT } from './mutation'
import { createClickControl } from '../base'

export const FillRequirementControl = args =>
  createClickControl({
    displayName: 'fillRequirement',
    mutation: FILL_REQUIREMENT,
    preMutation: ({ die: { id } }) => ({ diceRequirementId: id }),
    updateMutation: () => {},
    ...args,
  })
