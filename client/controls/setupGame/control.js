import React from 'react'
import { SETUP_GAME } from './mutation'
import { createClickControl } from '../base'

export const SetupGameControl = args =>
  createClickControl({
    displayName: 'setupGame',
    mutation: SETUP_GAME,
    ...args,
  })
