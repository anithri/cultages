import PropTypes from 'prop-types'
import React from 'react'
import { hexShape } from 'models/hex'
import { reactRefShape } from 'models/reactRef'
import { timeToDraw } from './utils'

function Hexagon({ canvasRef, hex, radius, offset }) {
  // const corners = [
  //   new THREE.Vector3(0, radius, height),
  //   new THREE.Vector3(radius * 0.866, radius * 0.5, height),
  //   new THREE.Vector3(radius * 0.866, -radius * 0.5, height),
  //   new THREE.Vector3(0, -radius, height),
  //   new THREE.Vector3(-radius * 0.866, -radius * 0.5, height),
  //   new THREE.Vector3(-radius * 0.866, radius * 0.5, height),
  // ]

  if (timeToDraw(canvasRef)) {
    // console.log(offset)
    const { x, y } = hex.toPoint().add(offset)
    const ctx = canvasRef.current.getContext('2d')

    // console.log(
    //   'Hexagon',
    //   offset,
    //   canvasRef.current.width,
    //   canvasRef.current.height,
    // )

    ctx.fillStyle = hex.id % 100 === 0 ? 'Red' : 'purple'
    ctx.fillRect(x + 2 * radius, y + 2 * radius, radius, radius)
  }
  return null
}

Hexagon.propTypes = {
  className: PropTypes.string,
  canvasRef: reactRefShape,
  hex: hexShape,
}

export default Hexagon
