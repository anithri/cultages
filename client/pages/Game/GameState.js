import React from 'react'
import { Redirect } from 'react-router-dom'
import { GameContainer, gameShape } from 'concerns/game'

const GameState = ({ game }) => {
  console.log('GameState', game)
  return <Redirect to={game.url} />
}

GameState.propTypes = {
  game: gameShape.isRequired,
}

export default GameContainer({ Display: GameState })
