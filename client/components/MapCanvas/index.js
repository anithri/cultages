import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import cx from 'classnames'
import { hexListShape } from 'models/hex'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Hexagon from './Hexagon'
import Controls from './Controls'
const cameraPosition = new THREE.Vector3(0, 0, 800)
const MapCanvas = ({ className, hexes }) => {
  const hexagons = hexes.map((hex, idx) => (console.log(hex) ||
    <Hexagon hex={hex} key={`canvas-hexagon-${hex.id}-${idx}`} />
  ))

  return (
    <section className={cx(className, styles.map)}>
      <Canvas orthographic camera={{ far: 5000, position: cameraPosition }}>
        <Controls cameraPosition={cameraPosition} />
        {hexagons}
      </Canvas>
    </section>
  )
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapCanvas
