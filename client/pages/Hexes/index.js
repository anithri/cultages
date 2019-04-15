import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { HexListContainer } from 'concerns/hex'
import { hexListShape } from 'models/hex'

const Hexes = ({ className, hexes }) => (
  <div className={cx(className, styles.hexes)}>
    <h2>Component (styled) Hexes: {hexes.length}</h2>
  </div>
)

Hexes.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default HexListContainer({Display: Hexes})
