import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'
import EmptySlot from './EmptySlot'
import { cardListShape } from 'models/card'

const CardSlotPane = ({ className, cards }) => {
  const allCards = cards.map((card, idx) => {
    if (!card) return <EmptySlot key={idx} />
    return <Card card={card} key={idx} />
  })
  return (
    <section className={cx(className, styles.cardSlot)}>{allCards}</section>
  )
}

CardSlotPane.propTypes = {
  className: PropTypes.string,
  cards: cardListShape,
}

export default CardSlotPane
