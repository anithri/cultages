import { mapShape } from 'models/map'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Hexagon from './Hexagon'
import { applyTransforms, calculateTransforms, timeToDraw } from './utils'
import { drawHex } from './drawHex'

const Grid = ({ map, canvasRef }) => {
  if (!timeToDraw(canvasRef)) return null
  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  const height = canvasRef.current.height
  const width = canvasRef.current.width

  let transforms = calculateTransforms({
    width: width,
    height: height,
    map,
  })

  ctx.scale(transforms.scale, transforms.scale)
  ctx.strokeStyle = 'darkgray'
  ctx.fillStyle = 'lightblue'

  useEffect(() => {
    if (!timeToDraw(canvasRef)) return

    transforms = calculateTransforms({ width, height, map })
    console.log('Grid effect')
    map.grid.map(hex => drawHex({ canvas, hex, offset: transforms.offset }))
  })

  return <span>Grid</span>
}

Grid.defaultProps = {
  width: 640,
  height: 480,
}

Grid.propTypes = {
  className: PropTypes.string,
  map: mapShape,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Grid
