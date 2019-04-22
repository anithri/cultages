---
to: <%= listShapePath %>
---
import PropTypes from 'prop-types'
import { <%= shapeName %> } from '../shape'

export const <%= listShapeName %> = PropTypes.arrayOf(<%= shapeName %>)
