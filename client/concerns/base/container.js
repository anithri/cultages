import { useQuery } from 'react-apollo-hooks'
import DefaultLoading from 'components/Loading'
import DefaultError from 'components/QueryError'
import React from 'react'
import { emptyQuery, spreadData } from './utils'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

export const createContainer = args => {
  const {
    Display,
    displayName = 'UnknownContainer',
    Loading = DefaultLoading,
    Error = DefaultError,
    query,
    preQuery = emptyQuery,
    postQuery = spreadData,
    propTypes = {
      className: PropTypes.string,
    },
  } = args

  const container = props => {
    const containerProps = preQuery(props)
    const variables = containerProps || {}

    const { data, error, loading } = useQuery(query, { variables })

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const sendMessage = ({ body, type }) =>
      toast(body, { type, className: 'Prime' })

    const displayProps = postQuery(props, data)

    return (
      <React.Fragment>
        <Display {...displayProps} sendMessage={sendMessage} />
      </React.Fragment>
    )
  }

  container.displayName = displayName
  container.propTypes = propTypes

  return container
}
