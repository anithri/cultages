import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { START_GAME } from './mutation'
import { createClickControl } from '../base'

export const StartGameControl = args =>
  createClickControl({
    displayName: 'startGame',
    mutation: START_GAME,
    ...args,
  })
