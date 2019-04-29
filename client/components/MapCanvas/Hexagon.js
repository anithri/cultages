import PropTypes from 'prop-types'
import React from 'react'
import { hexShape } from 'models/hex'
import { reactRefShape } from 'models/reactRef'
import { timeToDraw } from './utils'

function Hexagon({ canvasRef, hex, offset }) {
  if (timeToDraw(canvasRef)) {
    // console.log(offset)
    const center = hex.toPoint().add(offset)
    const { x, y } = center
    const ctx = canvasRef.current.getContext('2d')
    const corners = hex.corners().map(h => {
      const corner = h.add(center)
      return [corner.x, corner.y]
    })

    console.log(hex)
    ctx.beginPath()
    ctx.moveTo(...corners[5])
    corners.forEach(c => {
      ctx.lineTo(...c)
      ctx.stroke()
    })
    ctx.closePath()
    ctx.fill()
  }
  return null
}

Hexagon.propTypes = {
  className: PropTypes.string,
  canvasRef: reactRefShape,
  hex: hexShape,
}

export default Hexagon
