import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { MapListContainer } from 'concerns/map'
import { mapListShape } from 'models/map'
import List from './List'

const Maps = ({ className, maps }) => (
  <div className={cx(className, styles.maps)}>
    <List maps={maps} />
  </div>
)

Maps.propTypes = {
  className: PropTypes.string,
  maps: mapListShape,
}

export default MapListContainer({ Display: Maps })
