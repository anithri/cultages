import cx from 'classnames'
import { mapShape } from 'models/map'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import Grid from './Grid'

const MapCanvas = ({ className, width, height, map }) => {
  const canvasRef = useRef()

  return (
    <canvas
      ref={canvasRef}
      width={width || map.maxX}
      height={height || map.maxY}
      onClick={e => console.log('click', e)}
      className={cx(className, styles.canvas)}
    >
      <Grid map={map} canvasRef={canvasRef} />
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
