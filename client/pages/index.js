import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Error404 from 'pages/Error404'
import Games from 'pages/Games'
import Home from './Home'
import PropTypes from 'prop-types'
import React from 'react'
import Game from 'pages/Game'
import GameState from 'pages/Game/GameState'

import Hexes from 'pages/Hexes'

/* new imports above here - see templates/jg/pages */

const SiteRouter = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/games/:gameId/:gameState/:playerId/die/:dieId"
          component={Game}
        />
        <Route
          exact
          path="/games/:gameId/:gameState/:playerId"
          component={Game}
        />
        <Route exact path="/games/:gameId/:gameState" component={Game} />
        <Route exact path="/games/:gameId" component={GameState} />
        <Route strict path="/games" component={Games} />

        <Route exact path="/hexes" component={Hexes} />

        {/* page routes above here - see templates/jg/pages */}
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

SiteRouter.propTypes = {
  className: PropTypes.string.isRequired,
}
export default SiteRouter
