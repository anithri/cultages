import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const PlayerCardActions = ({ className }) => (
  <div className={cx(className, styles.actions)}>
    <h2>Component (styled) Actions</h2>
  </div>
)

PlayerCardActions.propTypes = {
  className: PropTypes.string,
}

export default PlayerCardActions

