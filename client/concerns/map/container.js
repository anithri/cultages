import { GET_MAP } from './query'
import { parseMap } from 'models/map'
import { createRouteIdContainer } from 'concerns/base'

export const MapContainer = args => {
  return createRouteIdContainer({
    displayName: 'MapContainer',
    concern: 'map',
    parser: parseMap,
    query: GET_MAP,
    ...args,
  })
}
