import PropTypes from 'prop-types'
import { diceListShape } from 'models/dice'
import { cardSlotShape } from 'models/cardSlot'

export const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  playerSlot: cardSlotShape.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dice: diceListShape,
  theme: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
})
