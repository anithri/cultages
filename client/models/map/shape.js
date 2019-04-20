import PropTypes from 'prop-types'
import { hexListShape } from 'models/hex'

export const mapShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  radius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
  hexes: hexListShape,
})
