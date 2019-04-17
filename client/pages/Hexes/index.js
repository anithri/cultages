import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styles from './styles.module.css'
import { HexListContainer } from 'concerns/hex'
import { hexListShape } from 'models/hex'
import MapCanvas from 'components/MapCanvas'

const Hexes = ({ className, hexes }) => {
  return (
    <div className={cx(className, styles.hexes)}>
      <header>
        <h2>Hexes: {hexes.length}</h2>
      </header>
      <MapCanvas hexes={hexes} className={styles.canvas} />
    </div>
  )
}

Hexes.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default HexListContainer({ Display: Hexes })
