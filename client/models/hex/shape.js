import PropTypes from 'prop-types'

export const hexShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
})
