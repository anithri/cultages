import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { GridMapContainer, gridMapShape } from 'models/gridMap'
import MapPanel from 'components/MapPanel'

const GridMap = ({ className, gridMap }) => {
  return (
    <main className={cx(className, styles.gridMap)}>
      <header className={styles.header}>
        <h2>{gridMap.name}</h2>
        <span>size: {gridMap.radius} miles</span>
      </header>
      <MapPanel hexes={gridMap.hexes} className={styles.map} />
    </main>
  )
}

GridMap.propTypes = {
  className: PropTypes.string,
  gridMap: gridMapShape,
}

export default GridMapContainer({ Display: GridMap })
