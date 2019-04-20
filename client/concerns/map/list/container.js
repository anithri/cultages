import { GET_MAP_LIST } from './query'
import { parseMapList } from 'models/map'
import { createListOfContainer } from 'concerns/base'

export const MapListContainer = args =>
  createListOfContainer({
    concern: 'maps',
    parser: parseMapList,
    query: GET_MAP_LIST,
    ...args,
  })
