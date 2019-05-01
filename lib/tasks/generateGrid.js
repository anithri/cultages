// const [_node, _script, size, cols, rows] = process.argv
const Honeycomb = require('honeycomb-grid')
let size, cols, rows
const COLS = cols || 16
const ROWS = rows || 10
const SIZE = size || 12

const Hex = Honeycomb.extendHex({
  size: SIZE,
  origin: [20.785, 24], // TODO calculate from SIZE
})
const Grid = Honeycomb.defineGrid(Hex)
const g = Grid.rectangle({ width: COLS, height: ROWS })

const final = {
  grid: {
    size: SIZE,
    cols: COLS,
    rows: ROWS,
  },
  hexes: [],
}

g.forEach(hex => {

  const center = {
    x: Math.round(hex.toPoint().x * 1000) / 1000,
    y: Math.round(hex.toPoint().y * 1000) / 1000,
  }

  const gridHex = {
    ...hex.cube(),
    row: hex.x,
    col: hex.y,
    center: center,
    corners: [],
  }
  final.hexes.push(gridHex)

  hex.corners().forEach((corner) => {
    const loc = hex.toPoint().add(corner)
    const point = {
      x: Math.round(loc.x * 1000) / 1000,
      y: Math.round(loc.y * 1000) / 1000,
    }
    gridHex.corners.push(point)
  })
})

console.log(JSON.stringify(final))
