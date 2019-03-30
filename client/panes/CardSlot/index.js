import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from './Card'

const CardSlotPane = ({ className, slot }) => (
  <section className={cx(className, styles.cardSlot, styles[slot])}>
    <Card />
  </section>
)

CardSlotPane.propTypes = {
  className: PropTypes.string,
  slot: PropTypes.string.isRequired,
}

export default CardSlotPane
