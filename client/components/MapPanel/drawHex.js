import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { hexShape } from 'models/hex'
const DrawHex = ({ className, hex }) => {
  return (
    <h3>{hex}</h3>
  )
}

DrawHex.propTypes = {
  className: PropTypes.string,
  hex: hexShape,
}

export default DrawHex
