import { GET_GAME } from './query'
import { parseGame } from './utils'
import { createRouteIdContainer } from 'concerns/base'

export const GameContainer = args => {
  return createRouteIdContainer({
    displayName: 'GameContainer',
    concern: 'game',
    parser: parseGame,
    query: GET_GAME,
    ...args,
  })
}
