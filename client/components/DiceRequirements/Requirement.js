import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
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
  diceRequirement: { value, theme, fillable },
  doClick,
  size,
}) => {
  return (
    <figure
      onClick={() => doClick && doClick()}
      className={cx(styles[theme], className, styles.requirement, {
        [styles.fillable]: fillable,
      })}
    >
      <FontAwesomeIcon
        icon={diceName[value]}
        fixedWidth={true}
        size={size}
        className={cx(className, styles.requirement)}
      />
    </figure>
  )
}

Requirement.propTypes = {
  className: PropTypes.string,
  doClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  diceRequirement: diceRequirementShape,
}
Requirement.defaultProps = {
  size: '4x',
  doClick: evt => evt.preventDefault(),
}

export default Requirement
