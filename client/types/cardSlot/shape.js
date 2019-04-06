import PropTypes from 'prop-types'
import {diceRequirementListShape} from 'types/diceRequirement'

export const cardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  diceRequirement: diceRequirementListShape,
})

export const cardSlotShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(cardShape).isRequired,
})
