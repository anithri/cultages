import PropTypes from 'prop-types'

export const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  theme: PropTypes.string.isRequired,
})