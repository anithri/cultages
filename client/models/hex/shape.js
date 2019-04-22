import PropTypes from 'prop-types'
import { cornerShape, cornerListShape } from 'models/corner'

export const hexShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  q: PropTypes.number,
  r: PropTypes.number,
  s: PropTypes.number,
  center: cornerShape.isRequired,
  corners: cornerListShape,
})
