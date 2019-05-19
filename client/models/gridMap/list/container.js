import { GET_GRID_MAP_LIST } from './query'
import { parseGridMapList } from './utils'
import { createListOfContainer } from 'concerns/base'

export const GridMapListContainer = args =>
  createListOfContainer({
    concern: 'gridMaps',
    parser: parseGridMapList,
    query: GET_GRID_MAP_LIST,
    ...args,
  })
