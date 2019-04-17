---
to: <%= styledPath %>
---
/*
* Copyright (c) 2019.  Cermak, Peterka, & Peterson.
*/
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssImportPath %>'

const <%= styledName %> = ({className}) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Component (styled) <%= styledName %></h2>
  </div>
)

<%= styledName %>.propTypes = {
  className: PropTypes.string,
}

export default <%= styledName %>
