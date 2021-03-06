---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#

to: <%= paneContainedPath || null %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { <%= containerName %>, <%= shapeName %> } from '<%= concernPath %>'

const <%= paneName %> = ({ className, <%= containedName %> }) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Component (styled) <%= paneName %></h2>
  </div>
)

<%= paneName %>.propTypes = {
  className: PropTypes.string,
  <%= containedName %>: <%= shapeName %>,
}

export default <%= containerName %>(<%= paneName %>)
