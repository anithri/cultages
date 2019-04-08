import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const rewardData = {
  'money1': {icon: 'badge', count: 1, size: "2x"},
  'money2': {icon: 'badge', count: 2, size: "2x"},
  'money3': {icon: 'badge', count: 3, size: "2x"},
  'unlock': {icon: 'lock-open-alt', size: "2x"},
}

const Reward = ({className, reward}) => (
  <figure className={styles.reward}>
    <span className="fa-layers tc">
      <FontAwesomeIcon {...rewardData[reward]} />
      <span className="fa-layers-text fa-inverse">
        {rewardData[reward].count}
      </span>
    </span>
  </figure>
)

Reward.propTypes = {
  className: PropTypes.string,
  reward: PropTypes.string.isRequired,
}

export default Reward
