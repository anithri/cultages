import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const diceName = [
  'dice-d6',
  'dice-one',
  'dice-two',
  'dice-three',
  'dice-four',
  'dice-five',
  'dice-six',
]

const Die = ({ className, die: { selected, value, theme }, doClick, size }) => {
  return (
    <figure
      onClick={() => doClick && doClick()}
      className={cx(selected && styles.selectedDie, styles[theme])}
    >
      <FontAwesomeIcon
        icon={diceName[value]}
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
  pips: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  die: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    theme: PropTypes.string.isRequired,
  }),
}
Die.defaultProps = {
  size: '4x',
  doClick: e => e.preventDefault(),
}

export default Die
