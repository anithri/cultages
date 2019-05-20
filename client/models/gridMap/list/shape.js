import PropTypes from 'prop-types'

export const gridMapRowShape = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
}

export const gridMapListShape = PropTypes.arrayOf(
  PropTypes.shape(gridMapRowShape),
)
