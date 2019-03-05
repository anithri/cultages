import PropTypes from 'prop-types'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer, gameShape } from 'concerns/game'
import PlayerCard from 'panes/PlayerCard'
import GamePane from 'panes/GamePane'

const GamePage = ({ className, game }) => {
  console.log(game.players)
  const players = game.players.map(player => (
    <PlayerCard
      {...player}
      key={`gamePage-player-${player.playerId}`}
      className={styles[player.slug]}
    />
  ))
  return (
    <main className={cx(className, styles.page)}>
      <GamePane game={game} className={styles.game} />
      {players}
    </main>
  )
}

GamePage.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GameContainer({ Display: GamePage })
