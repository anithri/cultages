import PropTypes from 'prop-types'
import { cardSlotShape } from 'types/cardSlot'

export const gameShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({ playerId: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
  boardSlots: PropTypes.arrayOf(cardSlotShape),
})
