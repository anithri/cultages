import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { apply, useThree } from 'react-three-fiber'
import { OrbitControls } from 'vendor/controls/OrbitControls'

apply({ OrbitControls })

const Controls = ({ cameraPosition }) => {
  const controls = useRef()
  const { camera, size } = useThree()
  console.log('Controls',size)
  camera.up = new THREE.Vector3(0, 0,1)
  camera.updateMatrix()

  return (
    <orbitControls
      ref={controls}
      args={[camera]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.1}
    />
  )
}

// Controls.propTypes = {
//   height: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
// }

export default Controls
