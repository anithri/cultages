import PropTypes from 'prop-types'

export const diceRequirementShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  slug: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
})
