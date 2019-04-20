import cx from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { mapListShape } from 'models/map'

const List = ({ className, maps }) => {
  const rows = maps.map(({ id, name }, idx) => (
    <li key={`mapList-${id}`}>
      <Link to={`/maps/${id}`}>
        {idx + 1}. {name}
      </Link>
    </li>
  ))
  return (
    <aside className={cx(className, styles.list)}>
      <ul>{rows}</ul>
    </aside>
  )
}

List.propTypes = {
  className: PropTypes.string,
  maps: mapListShape.isRequired,
}

export default List
