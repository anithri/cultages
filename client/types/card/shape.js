import PropTypes from 'prop-types'
import { diceRequirementListShape } from 'types/diceRequirement'

export const cardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  diceRequirements: diceRequirementListShape,
})
