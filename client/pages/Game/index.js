import PropTypes from 'prop-types'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer, gameShape } from 'concerns/game'
import PlayerCard from 'panes/PlayerCard'
import GameInfoPane from 'panes/GameInfo'
import { Redirect } from 'react-router-dom'
import CardSlot from 'panes/CardSlot'

const GamePage = ({ className, game, match }) => {
  console.log('GamePage', game.url, match.url)
  if (game.url !== match.url) return <Redirect to={game.url} />

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
  return (
    <main className={cx(className, styles.gamePage)}>
      <GameInfoPane game={game} className={styles.game} />
      {players}
      <CardSlot cards={[null]} className={styles.slot1} />
      <CardSlot cards={[null]} className={styles.slot2} />
      <CardSlot cards={[null]} className={styles.slot3} />
      <CardSlot cards={[null]} className={styles.slot4} />
      <CardSlot cards={[null,null]} className={styles.slot5} />
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
