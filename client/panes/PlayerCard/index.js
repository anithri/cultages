import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { PlayerContainer, playerShape } from 'concerns/player'

const PlayerCardPane = ({ className, player, currentPlayer }) => (
  <div className={cx(className, styles.playerCard, currentPlayer && styles.currentPlayer)}>
    <h2>{player.name}</h2>
  </div>
)

PlayerCardPane.propTypes = {
  className: PropTypes.string,
  currentPlayer: PropTypes.bool,
  player: playerShape,
}

export default PlayerContainer({ Display: PlayerCardPane })
