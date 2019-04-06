import { START_GAME } from './mutation'
import { createClickControl } from '../base'

export const StartGameControl = args =>
  createClickControl({
    displayName: 'startGame',
    mutation: START_GAME,
    preMutation: ({ gameId }) => ({ gameId }), // create mutation variables
    ...args,
  })
