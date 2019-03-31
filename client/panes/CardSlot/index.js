import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'
import EmptySlot from './EmptySlot'
import { cardShape } from 'concerns/cardSlot'

const CardSlotPane = ({ className, cards }) => {
  const allCards = cards.map(
    (c, i) => (c ? <Card card={c} key={i} /> : <EmptySlot key={i} />),
  )
  return (
    <section className={cx(className, styles.cardSlot)}>{allCards}</section>
  )
}

CardSlotPane.propTypes = {
  className: PropTypes.string,
  cards: PropTypes.arrayOf(cardShape).isRequired,
}

export default CardSlotPane
