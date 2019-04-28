import { mapShape } from 'models/map'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import Hexagon from './Hexagon'
import { applyTransforms, calculateTransforms, timeToDraw } from './utils'

const Grid = ({ map, canvasRef }) => {
  if (!timeToDraw(canvasRef)) return null

  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  const { height, width } = canvasRef.current

  let transforms = calculateTransforms({
    width: width,
    height: height,
    map,
  })

  ctx.scale(transforms.scale, transforms.scale)

  const hexes = map.grid.map(hex => {
    return (
      <Hexagon
        hex={hex}
        offset={transforms.offset}
        canvasRef={canvasRef}
        radius={map.radius}
        key={`grid-hex-${hex.id}`}
      />
    )
  })

  useEffect(() => {
    if (!timeToDraw(canvasRef)) return {}

    transforms = calculateTransforms({ width, height, map })
    applyTransforms({ transforms, canvasRef })
  })

  return <>{hexes}</>
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
