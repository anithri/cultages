import { GET_GRID_MAP } from './query'
import { parseGridMap } from './utils'

import { createRouteIdContainer } from 'concerns/base'

export const GridMapContainer = args => {
  return createRouteIdContainer({
    displayName: 'GridMapContainer',
    concern: 'gridMap',
    parser: parseGridMap,
    query: GET_GRID_MAP,
    ...args,
  })
}
