import { END_TURN } from './mutation'
import { createClickControl } from '../base'

export const EndTurnControl = args =>
  createClickControl({
    displayName: 'endTurn',
    mutation: END_TURN,
    preMutation: ({ gameId }) => ({ gameId }), // create mutation variables
    ...args,
  })
