/*
* Copyright (c) 2019.  Cermak, Peterka, & Peterson.
*/
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import cx from 'classnames'
import { hexListShape } from 'models/hex'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Hexagon from './Hexagon'
import { Vector3 } from 'three'

function Thing({ vertices, color }) {
  return (
    <group ref={ref => console.log('we have access to the instance')}>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh
        onClick={e => console.log('click')}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}>
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

const MapCanvas = ({ className, hexes }) => {
  const hexagons = hexes.map((hex, idx) => (
    <Hexagon
      hex={hex}
      key={`canvas-hexagon-${hex.id}-${idx}`}
    />
  ))
  return (
    <section className={cx(className, styles.map)}>
      <Canvas camera={{position: [987,522,750]}} >
        {hexagons}
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
          <meshBasicMaterial attach="material" color={'blue'} />
        </mesh>
      </Canvas>
    </section>
  )
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapCanvas
