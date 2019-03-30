---
to: <%= panePath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssImportPath %>'

const <%= paneName %> = ({ className }) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Component (styled) <%= paneName %></h2>
  </div>
)

<%= paneName %>.propTypes = {
  className: PropTypes.string,
}

export default <%= paneName %>
