import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { MapContainer } from 'concerns/map'
import { mapShape } from 'models/map'
import MapCanvas from 'components/MapCanvas'
import { useSize } from 'react-hook-size'

const MapPage = ({ className, map }) => {
  const sectionRef = useRef()
  const { width, height } = useSize(sectionRef)

  return (
    <div className={cx(className, styles.map)}>
      <header className={styles.header}>
        <h2>{map.name}</h2>
        <span>
          miles: {map.width} x {map.height}
          <br />
          radius: {map.radius} miles
        </span>
      </header>
      <section ref={sectionRef} className={cx(className, styles.canvas)}>
        <MapCanvas hexes={map.hexes} width={width} height={height} />
      </section>
    </div>
  )
}

MapPage.propTypes = {
  className: PropTypes.string,
  map: mapShape,
}

export default MapContainer({ Display: MapPage })
