import PropTypes from 'prop-types'

export const mapRowShape = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
}

export const mapListShape = PropTypes.arrayOf(mapRowShape)
