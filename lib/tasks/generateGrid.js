const [_node, _script, size, cols, rows] = process.argv

const COLS = cols || 5
const ROWS = rows || 5
const SIZE = size || 5

const Honeycomb = require('honeycomb-grid')
const Grid = Honeycomb.defineGrid()

const Hex = Honeycomb.extendHex({
  size: SIZE,
})
const g = Grid.rectangle({ width: COLS, height: ROWS })

const final = {
  hexes: [],
}

g.forEach(hex => {
  // console.log(hex.toPoint(), hex.cube())
  final.hexes.push({
    cube: hex.cube(),
    center: hex.toPoint(),
    corners: hex.corners(),
  })
})

console.log(JSON.stringify(final))
