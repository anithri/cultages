import PropTypes from 'prop-types'
import { diceRequirementListShape } from 'models/diceRequirement'

export const pointShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
  category: PropTypes.string,
})

export const hexShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  q: PropTypes.number,
  r: PropTypes.number,
  s: PropTypes.number,
  center: pointShape,
})
