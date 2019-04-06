import PropTypes from 'prop-types'
import { cardListShape } from 'models/card'

export const cardSlotShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cards: cardListShape,
})
