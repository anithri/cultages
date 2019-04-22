import * as THREE from 'three'
import PropTypes from 'prop-types'
import React from 'react'
import { hexShape } from 'models/hex'

function Hexagon({
  color = 'yellow',
  hex: {
    center: { vector },
    corners,
    q,
    r,
    s,
  },
}) {
  const cornerList = corners.map(({ vector: v }) => v)
  const borderCorners = [...cornerList, cornerList[0]]
  console.log('Hexagon',borderCorners)

  if (q === 17) {
    color = 'blue'
  } else if (r === 15) {
    color = 'green'
  } else if (s === -31) {
    color = 'cyan'
  } else if (r == 0) color = 'red'

  return (
    <group position={vector}>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[4, 16, 16]} />
        <meshBasicMaterial attach="material" color={color} />
      </mesh>
      <line>
        <geometry attach="geometry" vertices={borderCorners} />
        <lineBasicMaterial attach="material" color="black" />
      </line>
    </group>
  )
}

Hexagon.propTypes = {
  className: PropTypes.string,
  hex: hexShape,
}

export default Hexagon
