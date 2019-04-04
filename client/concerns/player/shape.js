import PropTypes from 'prop-types'
import { diceShape } from 'concerns/dice'

export const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  playerSlot: PropTypes.shape({
    cards: PropTypes.arrayOf(diceShape),
  }).isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dice: PropTypes.arrayOf(diceShape).isRequired,
  theme: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
})
