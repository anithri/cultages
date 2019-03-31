import PropTypes from 'prop-types'

export const cardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  dice: PropTypes.arrayOf(PropTypes.number).isRequired,
})

export const cardSlotShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(cardShape).isRequired,
})
