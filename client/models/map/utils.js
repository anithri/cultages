import { parseHexList } from 'models/hex'
import { defineGrid, extendHex } from 'honeycomb-grid'

const SCALE_WIDTH = 2 * Math.sqrt(3)

export const parseMap = ({ map }) => {
  const Hex = extendHex({
    size: map.radius,
    origin: [map.radius * SCALE_WIDTH, map.radius],
  })

  const HexGrid = defineGrid(Hex)
  const hexData = parseHexList(map)
  const grid = HexGrid(hexData.map(h => Hex(h)))

  const gap = map.radius * 2

  const maxX = Math.max(...grid.map(h => h.toPoint().x)) + 2 * gap
  const maxY = Math.max(...grid.map(h => h.toPoint().y)) + 2 * gap
  const aspect = maxX / maxY

  return {
    aspect,
    maxX,
    maxY,
    gap,
    Hex,
    HexGrid,
    grid,
    ...map,
    hexes: grid,
  }
}
