import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { GridMapListContainer, gridMapListShape } from 'models/gridMap'
import { Link } from 'react-router-dom'

const GridMaps = ({ className, gridMaps }) => {
  const rows = gridMaps.map(({ id, name, cols, rows }) => (
    <li key={`gridMapList-${id}`}>
      <Link to={`/grid_maps/${id}`}>{`${name} (${cols},${rows})`}</Link>
    </li>
  ))
  return (
    <main className={cx(className, styles.gridMaps)}>
      <article>
        <ul>{rows}</ul>
      </article>
    </main>
  )
}

GridMaps.propTypes = {
  className: PropTypes.string,
  gridMaps: gridMapListShape,
}

export default GridMapListContainer({ Display: GridMaps })
