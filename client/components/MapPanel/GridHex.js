import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useSize } from 'react-hook-size'
import styles from './styles.module.css'
import {
  Hexagon,
} from 'react-hexgrid'
import { hexShape } from 'models/hex'

const GridHex = ({ className, hex }) => {
  return (
    <Hexagon
      {...hex}
      className={cx(className, hex.r > 3 ? styles.unexplored : styles.found)}
    />
  )
}

GridHex.propTypes = {
  className: PropTypes.string,
  hex: hexShape,
}

export default GridHex
