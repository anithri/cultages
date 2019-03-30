import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Die from './Die'

const Dice = ({ className, dice, theme }) => {
  const allDice = dice.map((pips, idx) => (
    <li key={`dice-${idx}`}>
      <Die pips={pips} />
    </li>
  ))
  return <ul className={cx(className, styles.dice, styles[theme])}>{allDice}</ul>
}

Dice.propTypes = {
  className: PropTypes.string,
  dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  theme: PropTypes.string.isRequired,
}

export default Dice
