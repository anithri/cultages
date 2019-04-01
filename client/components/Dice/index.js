import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import styles from './styles.module.css'
import Die from './Die'
// import RequiredDice from './RequiredDice'
import SelectedDie from 'pages/Game'

const Dice = ({ className, dice, theme, layout, size }) => {
  const selectedDieId = useContext(SelectedDie)
  console.log('Dice - Context', selectedDieId)
  const allDice = dice.map((pips, idx) => (
    <li key={`dice-${idx}`}>
      <Die
        pips={pips}
        size={size}
        selected={selectedDieId === idx.toString()}
      />
    </li>
  ))
  return (
    <ul className={cx(className, styles.dice, styles[layout], styles[theme])}>
      {allDice}
    </ul>
  )
}

Dice.propTypes = {
  className: PropTypes.string,
  dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  theme: PropTypes.string.isRequired,
  layout: PropTypes.string,
  size: PropTypes.string,
}

Dice.defaultProps = {
  layout: 'column',
}

export default Dice
