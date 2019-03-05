import { GameListContainer, gameListShape } from 'concerns/game'
import Button from 'components/Button'
import cx from 'classnames'
import GameList from './List'
import MainHeader from 'components/MainHeader'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { SetupTableControl } from 'controls/setupTable'

const SetupTable = SetupTableControl({ Input: Button })

const GamesPage = ({ className, games, history }) => {
  return (
    <main className={cx(className, styles.GamesPage)}>
      <MainHeader title="Games" />
      <SetupTable label="New Game" history={history} />
      <GameList games={games} className={styles.GameList} />
    </main>
  )
}

GamesPage.propTypes = {
  className: PropTypes.string,
  games: gameListShape,
}

export default GameListContainer({ Display: GamesPage })
