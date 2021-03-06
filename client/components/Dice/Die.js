import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { diceShape } from 'models/dice'

export const diceName = [
  'lock-alt',
  'dice-d6',
  'dice-one',
  'dice-two',
  'dice-three',
  'dice-four',
  'dice-five',
  'dice-six',
]

const Die = ({
  className,
  die: { selected, value, theme, fillable },
  doClick,
  size,
}) => {
  return (
    <figure
      onClick={() => doClick && doClick()}
      className={cx(styles[theme], styles.die, {
        [styles.selectedDie]: selected,
        [styles.unfilled]: fillable,
      })}
    >
      <FontAwesomeIcon
        icon={diceName[value + 1]}
        fixedWidth={true}
        size={size}
        className={cx(className, styles.die)}
      />
    </figure>
  )
}

Die.propTypes = {
  className: PropTypes.string,
  doClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  die: diceShape,
}
Die.defaultProps = {
  size: '4x',
  doClick: e => e.preventDefault(),
}

export default Die
