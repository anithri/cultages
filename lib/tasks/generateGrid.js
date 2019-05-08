// const [_node, _script, size, cols, rows] = process.argv
const Honeycomb = require('honeycomb-grid')
let size, cols, rows
const COLS = cols || 48
const ROWS = rows || 30
const SIZE = size || 12

const Hex = Honeycomb.extendHex({
  size: SIZE,
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
  // const gridHex = {
  //   ...hex.cube(),
  // }
  final.hexes.push(hex.cube())

  // hex.corners().forEach(corner => {
  //   const loc = hex.toPoint().add(corner)
  //   const point = {
  //     x: Math.round(loc.x * 1000) / 1000,
  //     y: Math.round(loc.y * 1000) / 1000,
  //   }
  //   gridHex.corners.push(point)
  // })
})

console.log(JSON.stringify(final))
