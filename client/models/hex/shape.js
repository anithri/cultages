import PropTypes from 'prop-types'

export const hexShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  altitudes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  altitude: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
})
