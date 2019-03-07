import PropTypes from 'prop-types'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer, gameShape } from 'concerns/game'
import PlayerCard from 'panes/PlayerCard'
import GameInfoPane from 'panes/GameInfo'
import { Redirect } from 'react-router-dom'

const GamePage = ({ className, game, match }) => {
  console.log('GamePage', game.url, match.url)
  if (game.url !== match.url) return <Redirect to={game.url} />

  const players = game.players.map(player => (
    <PlayerCard
      {...player}
      key={`gamePage-player-${player.playerId}`}
      className={styles[player.slug]}
    />
  ))
  return (
    <main className={cx(className, styles.gamePage)}>
      <GameInfoPane game={game} className={styles.game} />
      {players}
    </main>
  )
}

GamePage.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GameContainer({ Display: GamePage })
