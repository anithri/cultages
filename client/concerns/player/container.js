import { GET_PLAYER } from './query'
import { parsePlayer } from './utils'
import { createByIdContainer } from 'concerns/base'

export const PlayerContainer = args => {
  return createByIdContainer({
    displayName: 'PlayerContainer',
    concern: 'player',
    parser: parsePlayer,
    query: GET_PLAYER,
    ...args,
  })
}
