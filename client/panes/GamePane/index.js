import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './pane.module.css'
import { gameShape } from 'concerns/game'
import {NavLink} from 'react-router-dom'

const GamePane = ({ className, game }) => (
  <div className={cx(className, styles.gamePane)}>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/games">Games</NavLink>
    </nav>
    <header>
      <h2>{game.name}</h2>
    </header>
    <aside>
      <h4>Draw: {game.drawCardCount} </h4>
    </aside>
    <aside>
      <h4>Discards: {game.discardsCardCount} </h4>
    </aside>
  </div>
)

GamePane.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GamePane
