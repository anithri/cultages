import { GET_GAME } from './query'
import { parseGame } from './utils'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import React from 'react'

export const GameContainer = Display => {
  const displayContainer = ({ gameId, ...props }) => {
    return (
      <Query query={GET_GAME} variables={{gameId}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error!</div>

          const game = parseGame(data.game)
          return <Display game={game} {...props} />
        }}
      </Query>
    )
  }
  displayContainer.displayName = GameContainer
  displayContainer.propTypes = {
    gameId: PropTypes.string.isRequired,
  }

  return displayContainer
}
