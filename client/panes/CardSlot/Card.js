import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Dice from 'components/Dice'
import {cardShape} from 'concerns/cardSlot'

const Card = ({ className, card }) => (
  <article className={cx(className, styles.Card)}>
    <header>
      <h4>{card.name}</h4>
    </header>
    <Dice dice={card.dice} size="2x" />
    <footer>
      <p>Reward</p>
    </footer>
  </article>
)

Card.propTypes = {
  className: PropTypes.string,
  card: cardShape,
}

export default Card
