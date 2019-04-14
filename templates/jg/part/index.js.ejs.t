---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#
to: <%= partPath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssFile %>'

const <%= partClass %> = ({ className }) => (
  <div className={cx(className, styles.<%= cssSelector %>)}>
    <h2><%= partType %> part <%= Name %></h2>
  </div>
)

<%= partClass %>.propTypes = {
  className: PropTypes.string,
}

export default <%= partClass %>

