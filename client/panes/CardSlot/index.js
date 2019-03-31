import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'
import EmptySlot from './EmptySlot'

const CardSlotPane = ({ className, cards }) => {
  const allCards = cards.map(
    (card, idx) => (card ? <Card card={card} key={idx} /> : <EmptySlot key={idx} />),
  )
  return (
    <section className={cx(className, styles.cardSlot)}>{allCards}</section>
  )
}

CardSlotPane.propTypes = {
  className: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CardSlotPane
