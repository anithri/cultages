import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Money = ({ className, money }) => (
  <div className={cx(className, styles.money)}>
    <h5>{money}</h5>
  </div>
)

Money.propTypes = {
  className: PropTypes.string,
  money: PropTypes.number.isRequired,
}

export default Money
