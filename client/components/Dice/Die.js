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

const Die = ({ className, pips }) => (
  <FontAwesomeIcon
    icon={diceName[pips]}
    size={'4x'}
    className={cx(className, styles.die)}
  />
)

Die.propTypes = {
  className: PropTypes.string,
  pips: PropTypes.number.isRequired,
}

export default Die
