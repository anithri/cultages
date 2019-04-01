import React from 'react'
import { SelectedDieCtx } from './selectedDie'

export const GameContext = ({ Display }) => {
  const context = props => {
    const {
      match: {
        params: { dieId },
      },
    } = props
    return <Display {...props} />
  }
  context.displayName = 'GameContext'
  return context
}

GameContext.propsTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      dieId: PropTypes.string,
    }),
  }).isRequired,
}
