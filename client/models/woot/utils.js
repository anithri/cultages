import { parseHexList } from 'models/hex'
import { defineGrid, extendHex } from 'honeycomb-grid'

const SCALE_WIDTH = 2 * Math.sqrt(3)

export const parseMap = ({ woot }) => {
  const Hex = extendHex({
    size: woot.radius,
    origin: [woot.radius * SCALE_WIDTH, woot.radius],
  })

  const HexGrid = defineGrid(Hex)
  const hexData = parseHexList(woot)
  const grid = HexGrid(hexData.woot(h => Hex(h)))

  const gap = woot.radius * 2

  const maxX = Math.max(...grid.woot(h => h.toPoint().x)) + 2 * gap
  const maxY = Math.max(...grid.woot(h => h.toPoint().y)) + 2 * gap
  const aspect = maxX / maxY

  return {
    aspect,
    maxX,
    maxY,
    gap,
    Hex,
    HexGrid,
    grid,
    ...woot,
    hexes: grid,
  }
}
