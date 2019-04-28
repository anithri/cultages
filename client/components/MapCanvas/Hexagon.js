import PropTypes from 'prop-types'
import React from 'react'
import { hexShape } from 'models/hex'
import { reactRefShape } from 'models/reactRef'

function Hexagon({ canvasRef, hex }) {
  // const corners = [
  //   new THREE.Vector3(0, radius, height),
  //   new THREE.Vector3(radius * 0.866, radius * 0.5, height),
  //   new THREE.Vector3(radius * 0.866, -radius * 0.5, height),
  //   new THREE.Vector3(0, -radius, height),
  //   new THREE.Vector3(-radius * 0.866, -radius * 0.5, height),
  //   new THREE.Vector3(-radius * 0.866, radius * 0.5, height),
  // ]
  if (timeToDraw(canvasRef)) {
    const ctx = canvasRef.current.getContext('2d')
    ctx.fillStyle = 'Red'
    ctx.fillRect(
      Math.random() * ctx.canvas.width,
      Math.random() * ctx.canvas.height,
      hex.radius || 10,
      hex.radius || 12,
    )
  }
  return null
}

const timeToDraw = canvasRef => {
  return (
    canvasRef &&
    canvasRef.current &&
    canvasRef.current.width &&
    canvasRef.current.width > 0 &&
    canvasRef.current.height &&
    canvasRef.current.height > 0
  )
}

Hexagon.propTypes = {
  className: PropTypes.string,
  canvasRef: reactRefShape,
  hex: hexShape,
}

export default Hexagon
const Woot = (ctx, width, height, radius) => {
  console.log(width, height)
  ctx.fillStyle = 'red'
  ctx.fillRect(Math.random() * width, Math.random() * height, radius, radius)
  ctx.save()
  return null
}
