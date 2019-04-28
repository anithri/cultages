import cx from 'classnames'
import { hexListShape } from 'models/hex'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styles from './styles.module.css'
import Hexagon from './Hexagon'

const MapCanvas = ({ className, hexes, width, height }) => {
  const canvasRef = useRef()

  const grid = hexes.map(hex => {
    return (
      <Hexagon hex={hex} canvasRef={canvasRef} key={`grid-hex-${hex.id}`} />
    )
  })

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onClick={e => console.log('click', e)}
    >
      {grid}
    </canvas>
  )
}

MapCanvas.defaultProps = {
  width: 0,
  height: 0,
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default MapCanvas
