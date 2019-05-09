/*
* Copyright (c) 2019.  Cermak, Peterka, & Peterson.
*/
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Woot = ({className}) => (
  <div className={cx(className, styles.woot)}>
    <h2>Component (styled) Woot</h2>
  </div>
)

Woot.propTypes = {
  className: PropTypes.string,
}

export default Woot
