import PropTypes from 'prop-types'

export const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
})
