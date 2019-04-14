---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#
to: <%= pageContainedPath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { <%= containerName %>, <%= shapeName %> } from '<%= concernPath %>'

const <%= pageName %> = ({ className, <%= containedName %> }) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Component (styled) <%= pageName %></h2>
  </div>
)

<%= pageName %>.propTypes = {
  className: PropTypes.string,
  <%= containedName %>: <%= shapeName %>,
}

export default <%= containerName %>(<%= pageName %>)
