import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import React from 'react'
import styles from './styles.module.css'
import { GameContainer, gameShape } from 'concerns/game'

const GamePage = ({ className, game }) => {
  return (
    <main className={cx(className, styles.page)}>
      <h2>{game.name}</h2>
    </main>
  )
}

GamePage.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GameContainer({ Display: GamePage })
