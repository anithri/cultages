import cx from 'classnames'
import { hexListShape } from 'models/hex'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Hexagon from './Hexagon'

import {
  Canvas,
  TransparentImage,
  Rectangle,
  Circle,
} from 'react-interactive-canvas'

const MapCanvas = ({ className, hexes }) => {
  return (
    <section className={cx(className, styles.map)}>
      <Canvas width={1000} height={1000}>
        <Rectangle
          x={0}
          y={0}
          width={1000}
          height={1000}
          fillStyle="#2b2b2b"
          id="grey-rectangle"
        />
      </Canvas>
    </section>
  )
}

MapCanvas.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapCanvas
