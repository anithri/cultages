import PropTypes from 'prop-types'

export const diceShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  slug: PropTypes.number.isRequired,
  inUse: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
})
