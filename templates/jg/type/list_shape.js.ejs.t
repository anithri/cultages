---
to: <%= mkPath('list/shape.js') %>
---
import PropTypes from 'prop-types'
import { <%= shapeName %> } from '../shape'

export const <%= listShapeName %> = PropTypes.arrayOf(<%= shapeName %>)
