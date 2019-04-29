import cx from 'classnames'
import { mapShape } from 'models/map'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import Grid from './Grid'

const MapCanvas = ({ className, width, height, map }) => {
  const canvasRef = useRef(null)
  const [drawCount, changeDrawCount] = useState(0)

  const doClick = e => drawCount > 0 || changeDrawCount(drawCount + 1)
  return (
    <canvas
      ref={canvasRef}
      width={width || map.maxX}
      height={height || map.maxY}
      onClick={doClick}
      className={cx(className, styles.canvas)}
    >
      <Grid map={map} canvasRef={canvasRef} drawCount={drawCount} />
    </canvas>
  )
}

MapCanvas.defaultProps = {
  width: 640,
  height: 480,
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  map: mapShape,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default MapCanvas
