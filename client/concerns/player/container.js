import { GET_PLAYER } from './query'
import { parsePlayer } from 'models/player'
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
