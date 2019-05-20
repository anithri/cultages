---
to: client/models/<%= name.toLowerCase() %>/utils.js
---
import { parseHexList } from 'models/hex'
import { defineGrid, extendHex } from 'honeycomb-grid'

const SCALE_WIDTH = 2 * Math.sqrt(3)

export const parseMap = ({ <%= name.toLowerCase() %> }) => {
  const GridHex = extendHex({
    size: <%= name.toLowerCase() %>.radius,
    origin: [<%= name.toLowerCase() %>.radius * SCALE_WIDTH, <%= name.toLowerCase() %>.radius],
  })

  const HexGrid = defineGrid(GridHex)
  const hexData = parseHexList(<%= name.toLowerCase() %>)
  const grid = HexGrid(hexData.<%= name.toLowerCase() %>(h => GridHex(h)))

  const gap = <%= name.toLowerCase() %>.radius * 2

  const maxX = Math.max(...grid.<%= name.toLowerCase() %>(h => h.toPoint().x)) + 2 * gap
  const maxY = Math.max(...grid.<%= name.toLowerCase() %>(h => h.toPoint().y)) + 2 * gap
  const aspect = maxX / maxY

  return {
    aspect,
    maxX,
    maxY,
    gap,
    GridHex,
    HexGrid,
    grid,
    ...<%= name.toLowerCase() %>,
    hexes: grid,
  }
}
