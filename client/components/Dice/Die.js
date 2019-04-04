import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
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

const Die = ({ className, die: { selected, value, theme }, size }) => {
  return (
    <figure className={cx(selected && styles.selectedDie, styles[theme])}>
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
}

export default Die
