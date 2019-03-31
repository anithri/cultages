import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const EmptySlot = ({ className }) => (
  <article className={cx(className, styles.emptySlot)}>
    <header>
      <h4>Empty</h4>
    </header>
  </article>
)

EmptySlot.propTypes = {
  className: PropTypes.string,
}

export default EmptySlot
