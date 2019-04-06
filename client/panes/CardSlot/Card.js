import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Dice from 'components/Dice'
import { cardShape } from 'models/card'

const Card = ({ className, card }) => {
  console.log('Card', card.diceRequirements)
  return (
    <article className={cx(className, styles.Card)}>
      <header>
        <h4>{card.name}</h4>
      </header>
      <Dice dice={card.diceRequirements} size="3x" />
      <footer>
        <p>Reward</p>
      </footer>
    </article>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  card: cardShape,
}

export default Card
