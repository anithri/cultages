import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { GridMapListContainer, gridMapListShape } from 'models/gridMap'
import { Link } from 'react-router-dom'

const GridMaps = ({ className, gridMaps }) => {
  const rows = gridMaps.map(({ id, name }) => (
    <li key={`gridMapList-${id}`}>
      <Link to={`/grid_maps/${id}`}>{name}</Link>
    </li>
  ))
  return (
    <section className={cx(className, styles.maps)}>
      <article>
        <ul>{rows}</ul>
      </article>
    </section>
  )
}

GridMaps.propTypes = {
  className: PropTypes.string,
  gridMaps: gridMapListShape,
}

export default GridMapListContainer({ Display: GridMaps })
