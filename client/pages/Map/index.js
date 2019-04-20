import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { MapContainer } from 'concerns/map'
import { mapShape } from 'models/map'
import MapCanvas from 'components/MapCanvas'

const MapPage = ({ className, map }) => (
  <div className={cx(className, styles.map)}>
    <header className={styles.header}>
      <h2>{map.name}</h2>
      <span>
        miles: {map.width} x {map.height}
        <br />
        radius: {map.radius} miles
      </span>
    </header>
    <MapCanvas hexes={map.hexes} />
  </div>
)

MapPage.propTypes = {
  className: PropTypes.string,
  map: mapShape,
}

export default MapContainer({ Display: MapPage })
