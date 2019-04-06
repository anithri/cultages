import PropTypes from 'prop-types'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer } from 'concerns/game'
import { gameShape } from 'models/game'
import PlayerCard from 'panes/PlayerCard'
import GameInfoPane from 'panes/GameInfo'
import { Redirect } from 'react-router-dom'
import CardSlot from 'panes/CardSlot'

const GamePage = ({ className, game, match }) => {
  console.log('GamePage', game)
  if (!match.url.startsWith(game.url)) return <Redirect to={game.url} />

  const players = game.players.map(player => {
    return (
      <PlayerCard
        {...player}
        currentPlayer={player.playerId === game.currentPlayerId}
        key={`gamePage-player-${player.playerId}`}
        className={styles[player.slug]}
      />
    )
  })

  const slots = game.boardSlots.map(slot => (
    <CardSlot key={slot.id} cards={slot.cards} className={styles[slot.id]} />
  ))

  return (
    <main className={cx(className, styles.gamePage)}>
      <GameInfoPane game={game} className={styles.game} />
      {players}
      {slots}
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
