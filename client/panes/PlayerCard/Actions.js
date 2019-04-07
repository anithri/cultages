import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const PlayerCardActions = ({ className }) => (
  <ul className={cx(className, styles.actions)}>
    <li>
      <button>End Turn</button>
    </li>
  </ul>
)

PlayerCardActions.propTypes = {
  className: PropTypes.string,
}

export default PlayerCardActions

