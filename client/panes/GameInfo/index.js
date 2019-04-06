import { Route, Switch } from 'react-router-dom'
import cx from 'classnames'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { gameShape } from 'models/game'
import { NavLink } from 'react-router-dom'
import DeckInfo from './DeckInfo'
import { StartGameControl } from 'controls/startGame'

const ReadyToStart = StartGameControl({ Input: Button })
const GameInfoPane = ({ className, game }) => (
  <div className={cx(className, styles.gameInfo)}>
    <header>
      <h2>{game.name}</h2>
    </header>
    <Route
      path="/games/:gameId/:gameState/:playerId?"
      children={({ match }) => {
        //console.log(match)
        if (match.url.endsWith('ready_to_start'))
          return <ReadyToStart label="Ready to Start" gameId={game.id} />
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
