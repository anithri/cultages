import PropTypes from 'prop-types'

export const diceShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
})
