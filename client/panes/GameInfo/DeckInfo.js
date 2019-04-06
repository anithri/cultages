import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { gameShape } from 'models/game'

const DeckInfo = ({ className, game }) => (
  <aside className={cx(className, styles.deckInfo)}>
    <figure className={styles.draw}>
      <figcaption>Draw:</figcaption>
      {game.drawCardCount}
    </figure>
    <figure className={styles.discards}>
      <figcaption>Discards:</figcaption>
      {game.discardsCardCount}
    </figure>
  </aside>
)

DeckInfo.propTypes = {
  className: PropTypes.string,
  game: gameShape.isRequired,
}

export default DeckInfo
