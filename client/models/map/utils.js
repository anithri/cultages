import { parseHexList } from 'models/hex'

export const parseMap = map => ({
  ...map,
  hexes: parseHexList(map),
})
