import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { SETUP_GAME } from './mutation'
import { createClickControl } from '../base'

export const SetupGameControl = args =>
  createClickControl({
    displayName: 'setupGame',
    mutation: SETUP_GAME,
    ...args,
  })
