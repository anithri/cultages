---
to: <%= shapeListPath('shape.js') %>
unless_exists: true
---
import PropTypes from 'prop-types'
// import { <%= shapeName  %> } from '../shape.js
//
// or use this
const <%= baseShapeName %> = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
}

export const <%= shapeName %> = PropTypes.arrayOf(<%= baseShapeName %>)
