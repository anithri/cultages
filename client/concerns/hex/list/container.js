import { GET_HEX_LIST } from './query'
import { parseHexList } from 'models/hex'
import { createListOfContainer } from 'concerns/base'

export const HexListContainer = args =>
  createListOfContainer({
    concern: 'hexes',
    parser: parseHexList,
    query: GET_HEX_LIST,
    ...args,
  })
