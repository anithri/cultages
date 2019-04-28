import PropTypes from 'prop-types'

export const hexListRowShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}).isRequired

export const hexListShape = PropTypes.arrayOf(hexListRowShape)





