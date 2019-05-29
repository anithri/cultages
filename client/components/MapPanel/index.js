import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { useSize } from 'react-hook-size'
import styles from './styles.module.css'
import { hexListShape } from 'models/hex'
import GridHex from './GridHex'
import barbarian from 'images/barbarian.png'

console.log('BARBARIAN!', barbarian)

const ratio = 0.897
const MapPanel = ({ className, flat, size, hexes }) => {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const { width, height } = useSize(wrapperRef)

  useEffect(() => {
    if (!canvasRef.current || height === 0) {
      console.log('No Canvas')
      return
    }
    const ctx = canvasRef.current.getContext('2d')
    ctx.canvas.width = width
    ctx.canvas.height = height
    ctx.lineWidth = 10

    // Wall
    ctx.strokeRect(75, 140, 150, 110)
  })

  console.log('useSize', width, height)
  return (
    height || (
      <section ref={wrapperRef} className={cx(className, styles.mapPanel)}>
        <canvas ref={canvasRef} width={100} height={100} />
      </section>
    )
  )
}

MapPanel.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapPanel
