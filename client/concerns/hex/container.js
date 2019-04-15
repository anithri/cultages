import { GET_HEX } from './query'
import { parseHex } from './utils'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import React from 'react'

export const HexContainer = Display => {
  const displayContainer = ({ hexId, ...props }) => {
    return (
      <Query query={GET_HEX} variables={{hexId}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error!</div>

          const hex = parseHex(data.hex)
          return <Display hex={hex} {...props} />
        }}
      </Query>
    )
  }
  displayContainer.displayName = HexContainer
  displayContainer.propTypes = {
    hexId: PropTypes.string.isRequired,
  }

  return displayContainer
}
