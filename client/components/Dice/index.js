import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import Die from './Die'
// import RequiredDice from './RequiredDice'
import SelectedDie from 'pages/Game'

const Dice = ({ className, dice = [], layout, size }) => {
  const [nowSelected, setSelected] = useState(false)

  const selectedDieId = useContext(SelectedDie)
  console.log('Dice - Context', selectedDieId)
  const allDice = dice.map((die, idx) => (
    <li key={`dice-${idx}`}>
      <Die die={die} size={size} />
    </li>
  ))
  return (
    <ul className={cx(className, styles.dice, styles[layout])}>
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
