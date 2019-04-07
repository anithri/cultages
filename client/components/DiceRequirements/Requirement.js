import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { diceRequirementShape } from 'models/diceRequirement'

export const diceName = [
  'dice-d6',
  'dice-one',
  'dice-two',
  'dice-three',
  'dice-four',
  'dice-five',
  'dice-six',
]

const Requirement = ({
  className,
  requirement: { value, theme, fillable },
  doClick,
  size,
}) => {
  return (
    <figure
      onClick={() => doClick && doClick()}
      className={cx(styles[theme], styles.requirement, {
        [styles.unfilled]: fillable,
      })}
    >
      <FontAwesomeIcon
        icon={diceName[value]}
        fixedWidth={true}
        size={size}
        className={cx(className, styles.Requirement)}
      />
    </figure>
  )
}

Requirement.propTypes = {
  className: PropTypes.string,
  doClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  requirement: diceRequirementShape,
}
Requirement.defaultProps = {
  size: '4x',
  doClick: e => e.preventDefault(),
}

export default Requirement
