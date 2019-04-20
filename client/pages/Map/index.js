import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { MapContainer } from 'concerns/map'
import { mapShape } from 'models/map'

const MapPage = ({ className, map }) => (
  <div className={cx(className, styles.map)}>
    <header>
      <h2>{map.name}</h2>
    </header>
  </div>
)

MapPage.propTypes = {
  className: PropTypes.string,
  map: mapShape,
}

export default MapContainer({ Display: MapPage })
