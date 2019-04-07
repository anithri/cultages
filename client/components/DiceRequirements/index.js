import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Requirement from './Requirement'
import { SelectDiceControl } from 'controls/selectDice'
import { diceRequirementListShape } from 'models/diceRequirement'
import { FillRequirementControl } from 'controls/fufillRequirement'

const FillableRequirement = FillRequirementControl({ Input: Requirement })

const DiceRequirement = ({
  className,
  diceRequirements = [],
  layout,
  size,
}) => {
  const allRequirements = diceRequirements.map((requirement, idx) => {
    const RequirementDisplay = requirement.fillable
      ? FillableRequirement
      : Requirement

    return (
      <li key={`diceRequirement-${requirement.id}`}>
        <RequirementDisplay diceRequirement={requirement} size={size} />
      </li>
    )
  })
  return (
    <ul className={cx(className, styles.requirement, styles[layout])}>
      {allRequirements}
    </ul>
  )
}

DiceRequirement.propTypes = {
  className: PropTypes.string,
  diceRequirements: diceRequirementListShape,
  layout: PropTypes.string,
  size: PropTypes.string,
}

DiceRequirement.defaultProps = {
  layout: 'column',
}

export default DiceRequirement
