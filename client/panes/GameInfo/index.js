import { Route, Switch } from 'react-router-dom'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { gameShape } from 'concerns/game'
import { NavLink } from 'react-router-dom'
import DeckInfo from './DeckInfo'

const ReadyToStart = props => <h1>Ready to Start</h1>

const GameInfoPane = ({ className, game }) => (
  <div className={cx(className, styles.gameInfo)}>
    <header>
      <h2>{game.name}</h2>
    </header>
    <Route
      path="/games/:gameId/:gameState"
      children={({ match }) => {
        console.log(match)
        if (match.url.endsWith('ready_to_start'))
          return <ReadyToStart game={game} />
        return <DeckInfo game={game} />
      }}
    />
  </div>
)

GameInfoPane.propTypes = {
  className: PropTypes.string,
  game: gameShape,
}

export default GameInfoPane
