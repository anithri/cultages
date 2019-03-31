import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { PlayerContainer, playerShape } from 'concerns/player'
import Dice from 'components/Dice'
import Money from './Money'
import CardSlot from 'panes/CardSlot'

const PlayerCardPane = ({ className, player, currentPlayer }) => {
  return (
    <div
      className={cx(
        className,
        styles.playerCard,
        styles[player.slug],
        styles[player.theme],
        currentPlayer && styles.currentPlayer,
      )}
    >
      <header>
        <h2>{player.name}</h2>
      </header>
      <CardSlot cards={[null,null,null,null]} className={styles.cards} />
      <Dice
        dice={player.dice}
        theme={player.theme}
        className={styles.dice}
        size={'3x'}
      />
      <Money money={player.money} />
    </div>
  )
}

PlayerCardPane.propTypes = {
  className: PropTypes.string,
  currentPlayer: PropTypes.bool,
  player: playerShape,
}

export default PlayerContainer({ Display: PlayerCardPane })
