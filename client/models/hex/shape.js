import PropTypes from 'prop-types'
import { diceRequirementListShape } from 'models/diceRequirement'

export const hexShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  diceRequirements: diceRequirementListShape,
  name: PropTypes.string.isRequired,
  reward: PropTypes.string.isRequired,
  slug: PropTypes.number.isRequired,
})
