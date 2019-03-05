import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { SETUP_TABLE } from './mutation'
import { createClickControl } from '../base'

export const SetupTableControl = args =>
  createClickControl({
    displayName: 'setupTable',
    mutation: SETUP_TABLE,
    ...args,
  })
