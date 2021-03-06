import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Die from './Die'
import { SelectDiceControl } from 'controls/selectDice'
import { diceListShape } from 'models/dice'

const SelectableDie = SelectDiceControl({ Input: Die })

const Dice = ({ className, dice = [], layout, size, allowSelect }) => {
  const allDice = dice.filter(die => !die.inUse).map((die, idx) => {
    const DieDisplay = (allowSelect && die.value > 0) ? SelectableDie : Die
    return (
      <li key={`dice-${die.id}`}>
        <DieDisplay diceId={die.id} die={die} size={size}/>
      </li>
    )
  })
  return (
    <ul className={cx(className, styles.dice, styles[layout])}>{allDice}</ul>
  )
}

Dice.propTypes = {
  className: PropTypes.string,
  dice: diceListShape,
  theme: PropTypes.string.isRequired,
  layout: PropTypes.string,
  size: PropTypes.string,
  allowSelect: PropTypes.bool,
}

Dice.defaultProps = {
  layout: 'column',
}

export default Dice
