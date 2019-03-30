import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { PlayerContainer, playerShape } from 'concerns/player'
import Dice from 'components/Dice'

const PlayerCardPane = ({ className, player, currentPlayer }) => {
  return (
    <div
      className={cx(
        className,
        styles.playerCard,
        currentPlayer && styles.currentPlayer,
      )}
    >
      <header>
        <h2>{player.name}</h2>
      </header>
      <Dice dice={player.dice} theme={player.theme} />
    </div>
  )
}

PlayerCardPane.propTypes = {
  className: PropTypes.string,
  currentPlayer: PropTypes.bool,
  player: playerShape,
}

export default PlayerContainer({ Display: PlayerCardPane })
