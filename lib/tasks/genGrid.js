// const [_node, _script, cols, rows] = process.argv
const GridGenerator = require('react-hexgrid').GridGenerator

const [cols, rows] = process.argv.slice(2)
const COLS = cols || 16
const ROWS = rows || 10
const SIZE = 4

const grid = GridGenerator.rectangle(cols, rows)

const final = {
  grid: {
    size: SIZE,
    cols: COLS,
    rows: ROWS,
  },
  hexes: grid,
}

console.log(JSON.stringify(final))
