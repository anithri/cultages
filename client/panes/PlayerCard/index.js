import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { PlayerContainer, playerShape } from 'concerns/player'

const PlayerCardPane = ({ className, player }) => (
  <div className={cx(className, styles.playerCard)}>
    <h2>{player.name}</h2>
  </div>
)

PlayerCardPane.propTypes = {
  className: PropTypes.string,
  player: playerShape,
}

export default PlayerContainer({ Display: PlayerCardPane })
