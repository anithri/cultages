import { GameListContainer } from 'concerns/game'
import { gameListShape } from 'models/game'
import Button from 'components/Button'
import cx from 'classnames'
import GameList from './List'
import MainHeader from 'components/MainHeader'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { SetupGameControl } from 'controls/setupGame'

const SetupGame = SetupGameControl({ Input: Button })

const GamesPage = ({ className, games, history }) => {
  return (
    <main className={cx(className, styles.GamesPage)}>
      <MainHeader title="Games" />
      <SetupGame label="New Game" history={history} />
      <GameList games={games} className={styles.GameList} />
    </main>
  )
}

GamesPage.propTypes = {
  className: PropTypes.string,
  games: gameListShape,
}

export default GameListContainer({ Display: GamesPage })
