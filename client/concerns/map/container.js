import { GET_MAP } from './query'
import { parseMap } from 'models/map'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import React from 'react'

export const MapContainer = Display => {
  const displayContainer = ({ mapId, ...props }) => {
    return (
      <Query query={GET_MAP} variables={{ mapId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error!</div>

          const map = parseMap(data.map)
          return <Display map={map} {...props} />
        }}
      </Query>
    )
  }
  displayContainer.displayName = MapContainer
  displayContainer.propTypes = {
    mapId: PropTypes.string.isRequired,
  }

  return displayContainer
}
