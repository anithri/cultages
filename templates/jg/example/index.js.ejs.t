---
to: <%= examplePath %>
---
/*
* Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
*/

import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssImportPath %>'

const <%= exampleName %> = ({className}) => (
  <div className={cx(className, styles.<%= cssName %>)}>
    <h2>Examples <%= exampleName %></h2>
  </div>
)

<%= exampleName %>.propTypes = {
  className: PropTypes.string,
}

export default <%= exampleName %>
