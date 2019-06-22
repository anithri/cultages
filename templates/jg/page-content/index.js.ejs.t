---
to: <%= pagePath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssFile %>'

const <%=pageName %> = ({ className, ...props }) => {
  //console.log('<%=pageName %>Page', props)
  return (
    <main className={cx(className, styles.<%= cssName %>)}>
      <h2>Page <%=pageName %> - found in <%= pagePath %></h2>
    </main>
  )
}

<%=pageName %>.propTypes = {
  className: PropTypes.string,
}

export default <%=pageName %>
