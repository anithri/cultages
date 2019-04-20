import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import cx from 'classnames'
import { hexListShape } from 'models/hex'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Hexagon from './Hexagon'

const cameraPosition = [987, 522, 750]

const MapCanvas = ({ className, hexes }) => {
  const hexagons = hexes.map((hex, idx) => (
    <Hexagon hex={hex} key={`canvas-hexagon-${hex.id}-${idx}`} />
  ))

  return (
    <section className={cx(className, styles.map)}>
      <Canvas camera={{ position: cameraPosition }}>{hexagons}</Canvas>
    </section>
  )
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapCanvas
