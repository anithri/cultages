const [_node, _script, size, cols, rows] = process.argv

const COLS = cols || 30
const ROWS = rows || 48
const SIZE = size || 12

const Honeycomb = require('honeycomb-grid')

const Hex = Honeycomb.extendHex({
  size: SIZE,
  origin: [20.785, 24],
})
const Grid = Honeycomb.defineGrid(Hex)
const g = Grid()

const final = {
  hexes: [],
}

g.forEach(hex => {
  // console.log(hex.toPoint(), hex.cube())
  final.hexes.push({
    // cube: hex.cube(),
    height: hex.height(),
    oppositeCornerDistance: hex.oppositeCornerDistance(),
    oppositeSideDistance: hex.oppositeSideDistance(),
    width: hex.width(),
    // center: hex.toPoint(),
    // corners: hex.corners(),
  })
})

console.log(JSON.stringify(final))
