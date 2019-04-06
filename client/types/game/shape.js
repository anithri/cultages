import PropTypes from 'prop-types'
import { cardSlotListShape } from 'types/cardSlot'
import { playerListShape } from 'types/player'

export const gameShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  currentPlayerId: PropTypes.string.isRequired,
  discardsCardCount: PropTypes.number,
  drawCardCount: PropTypes.number,
  selectedDie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  boardSlots: cardSlotListShape,
  players: playerListShape,
})
