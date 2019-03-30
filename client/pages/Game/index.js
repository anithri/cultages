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

  const players = game.players.map(player => {
    console.log(
      'GamePage.player',
      player.playerId,
      game.currentPlayerId,
      player.playerId === game.currentPlayerId,
    )
    return (
      <PlayerCard
        {...player}
        currentPlayer={player.playerId === game.currentPlayerId}
        key={`gamePage-player-${player.playerId}`}
        className={styles[player.slug]}
      />
    )
  })
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
      gameState: PropTypes.string.isRequired,
      playerId: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default GameContainer({ Display: GamePage })
