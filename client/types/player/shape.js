import PropTypes from 'prop-types'
import { diceShape } from 'types/dice'
import { cardSlotShape } from 'types/cardSlot'

export const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  playerSlot: cardSlotShape.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dice: PropTypes.arrayOf(diceShape).isRequired,
  theme: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
})
