---
to: <%= shapePath('shape.js') %>
unless_exists: true
---
import PropTypes from 'prop-types'
export const <%= shapeName %> = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
}
