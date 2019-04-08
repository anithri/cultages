import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import {EndTurnControl} from 'controls/endTurn'
import Button from 'components/Button'

const EndTurnButton = EndTurnControl({Input: Button})

const PlayerCardActions = ({ className, gameId }) => (
  <ul className={cx(className, styles.actions)}>
    <li>
      <EndTurnButton label="End Turn" gameId={gameId} />
    </li>
  </ul>
)

PlayerCardActions.propTypes = {
  className: PropTypes.string,
  gameId: PropTypes.string.isRequired,
}

export default PlayerCardActions

