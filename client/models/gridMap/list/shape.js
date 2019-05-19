import PropTypes from 'prop-types'

export const gridMapRowShape = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
}

export const gridMapListShape = PropTypes.arrayOf(
  PropTypes.shape(gridMapRowShape),
)
