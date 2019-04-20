import * as THREE from 'three'
import PropTypes from 'prop-types'
import React from 'react'
import { hexShape } from 'models/hex'
import { Canvas } from 'react-three-fiber'

function Hexagon({
  color = 'red',
  hex: {
    center: { vector },
    corners,
  },
}) {
  console.log(corners)
  const cornerList = corners.map(({ vector }) => vector)
  const borderCorners = [...cornerList, cornerList[0]]

  const border = (
    <line>
      <geometry attach="geometry" vertices={borderCorners} />
      <lineBasicMaterial attach="material" color={color} />
    </line>
  )
  return (
    <group position={vector}>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshBasicMaterial attach="material" color={'red'} />
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
/*
  <mesh
    visible
    userData={{ test: "hello" }}
    position={new THREE.Vector3(1, 2, 3)}
    rotation={new THREE.Euler(0, 0, 0)}
    geometry={new THREE.SphereGeometry(1, 16, 16)}
    material={new THREE.MeshBasicMaterial({ color: new THREE.Color('indianred'), transparent: true })}
  />
*/
