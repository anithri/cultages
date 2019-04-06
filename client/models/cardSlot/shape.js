import PropTypes from 'prop-types'
import {diceRequirementListShape} from 'models/diceRequirement'

export const cardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  diceRequirement: diceRequirementListShape,
})

export const cardSlotShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(cardShape).isRequired,
})
