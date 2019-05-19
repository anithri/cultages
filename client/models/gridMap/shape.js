import PropTypes from 'prop-types'
import { hexListShape } from 'models/hex'

export const gridMapShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  cols: PropTypes.number,
  rows: PropTypes.number,
  hexes: hexListShape,
})
