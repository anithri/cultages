import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'
import EmptySlot from './EmptySlot'

const CardSlotPane = ({ className, slot, card }) => (
  <section className={cx(className, styles.cardSlot, styles[slot])}>
    {card ? <Card card={card} /> : <EmptySlot />}
  </section>
)

CardSlotPane.propTypes = {
  className: PropTypes.string,
  slot: PropTypes.string.isRequired,
  card: PropTypes.string,
}

export default CardSlotPane
