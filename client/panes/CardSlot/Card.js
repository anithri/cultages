import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Dice from 'components/Dice'

const Card = ({ className }) => (
  <article className={cx(className, styles.Card)}>
    <header>
      <h4>Card</h4>
    </header>
    <Dice dice={[1, 2, 3, 4, 5, 6]} size="2x" />
    <footer>
      <p>Reward</p>
    </footer>
  </article>
)

Card.propTypes = {
  className: PropTypes.string,
}

export default Card
