import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Requirement from './Requirement'
import { SelectDiceControl } from 'controls/selectDice'
import { diceRequirementListShape } from 'models/dice'

const SelectableDie = SelectDiceControl({ Input: Requirement })

const DiceRequirement = ({
  className,
  diceRequirements = [],
  layout,
  size,
  allowSelect,
}) => {
  const DiceRequirementDisplay = allowSelect ? SelectableDie : Die
  const allRequirements = diceRequirements.map((requirement, idx) => (
    <li key={`diceRequirement-${requirement.id}`}>
      <DiceRequirementDisplay
        diceRequirementId={die.id}
        requirement={requirement}
        size={size}
      />
    </li>
  ))
  return (
    <ul className={cx(className, styles.requirement, styles[layout])}>
      {allRequirements}
    </ul>
  )
}

DiceRequirement.propTypes = {
  className: PropTypes.string,
  diceRequirements: diceRequirementListShape,
  theme: PropTypes.string.isRequired,
  layout: PropTypes.string,
  size: PropTypes.string,
  allowSelect: PropTypes.bool,
}

DiceRequirement.defaultProps = {
  layout: 'column',
}

export default DiceRequirement
