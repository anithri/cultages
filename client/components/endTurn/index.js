import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const endTurn = ({className}) => (
  <div className={cx(className, styles.endTurn)}>
    <h2>Component (styled) endTurn</h2>
  </div>
)

endTurn.propTypes = {
  className: PropTypes.string,
}

export default endTurn
