---
to: <%= partPath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssImportPath %>'

const <%= partName %> = ({ className }) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Component (styled) <%= partName %></h2>
  </div>
)

<%= partName %>.propTypes = {
  className: PropTypes.string,
}

export default <%= partName %>

