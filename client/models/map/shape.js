import PropTypes from 'prop-types'
import {hexListShape} from 'models/hex'

export const mapShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  radius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  cols: PropTypes.number,
  rows: PropTypes.number,
  hexes: hexListShape,
  Hex: PropTypes.function,
  HexGrid: PropTypes.function,
  grid: PropTypes.array,
})
