import { parseHexList } from 'models/hex'

export const parseGridMap = ({ gridMap }) => {
  return {
    ...gridMap,
    hexes: parseHexList(gridMap),
  }
}
