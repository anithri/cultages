---
to: <%= pagePlainPath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'
import styles from <%= cssFile %>

const <%= pageName %> = ({className}) => {
  return (
    <main className={cx(className, styles.<%= cssName %>)}>
      <h2>Page <%= pageName %></h2>
    </main>
  )
}

<%= pageName %>.propTypes = {
  className: PropTypes.string,
}

export default <%= pageName %>
