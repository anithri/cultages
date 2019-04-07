import { FILL_REQUIREMENT } from './mutation'
import { createClickControl } from '../base'

export const FillRequirementControl = args =>
  createClickControl({
    displayName: 'fillRequirement',
    mutation: FILL_REQUIREMENT,
    preMutation: ({ diceRequirement: { id } }) => ({ diceRequirementId: id }),
    updateMutation: () => {},
    ...args,
  })
