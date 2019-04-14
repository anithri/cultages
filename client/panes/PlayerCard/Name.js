import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { playerShape } from 'models/player'

const PlayerName = ({ className, player }) => (
  <header>
    <h2>{player.name}</h2>
  </header>
)

PlayerName.propTypes = {
  className: PropTypes.string,
  player: playerShape
}

export default PlayerName

