import { parseHexList } from 'models/hex'

export const parseMap = ({ map }) => ({
  ...map,
  hexes: parseHexList(console.log(map) || map),
})
