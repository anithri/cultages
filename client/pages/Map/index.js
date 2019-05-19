import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { GridMapContainer, gridMapShape } from 'models/gridMap'

const GridMap = ({ className, gridMap }) => {
  const sectionRef = useRef()
  return (
    <div className={cx(className, styles.gridMap)}>
      <header className={styles.header}>
        <h2>{gridMap.name}</h2>
        <span>size: {gridMap.radius} miles</span>
      </header>
      <section ref={sectionRef} className={cx(className, styles.canvas)} />
    </div>
  )
}

GridMap.propTypes = {
  className: PropTypes.string,
  gridMap: gridMapShape,
}

export default GridMapContainer({ Display: GridMap })
