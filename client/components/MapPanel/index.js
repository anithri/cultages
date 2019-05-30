import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styles from './styles.module.css'
import { hexListShape } from 'models/hex'
import drawHex from './drawHex'
import barbarian from 'images/barbarian.png'
import { Canvas, Circle, Rectangle, Polygon } from 'react-interactive-canvas'

const ratio = 0.897
const MapPanel = ({ className, flat, size, hexes }) => {
  // const canvasRef = useRef(null)
  // console.log(hexes[0])
  //
  // useEffect(() => {
  //   if (!canvasRef.current) return
  //
  //   const ctx = canvasRef.current.getContext('2d')
  //   ctx.lineWidth = 10
  //
  //   // Wall
  //   // hexes.forEach(hex => {
  //   //   ctx.fillPath
  //   // })
  // })
  //
  return (
    <section className={cx(className, styles.mapPanel)}>
      <h1>Hexes: {hexes.length}</h1>
    </section>
  )
}

MapPanel.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapPanel
