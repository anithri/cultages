import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'
import EmptySlot from './EmptySlot'

const CardSlotPane = ({ className, slot, cards }) => {
  const allCards = cards.map(
    (card, idx) => (card ? <Card card={card} key={idx} /> : <EmptySlot />),
  )
  return (
    <section className={cx(className, styles.cardSlot, styles[slot])}>
      {allCards}
    </section>
  )
}

CardSlotPane.propTypes = {
  className: PropTypes.string,
  slot: PropTypes.string.isRequired,
  card: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CardSlotPane
