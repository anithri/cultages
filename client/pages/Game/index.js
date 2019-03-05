import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer, gameShape } from 'concerns/game'
import PlayerCard from 'panes/PlayerCard'
const GamePage = ({ className, game }) => {
  console.log(game.players)
  const players = game.players.map(player => (
    <PlayerCard {...player} key={`gamePage-player-${player.playerId}`} />
  ))
  return (
    <main className={cx(className, styles.page)}>
      <h2>{game.name}</h2>
      {players}
    </main>
  )
}

GamePage.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GameContainer({ Display: GamePage })
