const [_node, _script, size, cols, rows] = process.argv

const COLS = cols || 16
const ROWS = rows || 12
const SIZE = size || 25

const Honeycomb = require('honeycomb-grid')

const Hex = Honeycomb.extendHex({
  size: SIZE,
  origin: [20.785, 24],
})
const Grid = Honeycomb.defineGrid(Hex)
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
