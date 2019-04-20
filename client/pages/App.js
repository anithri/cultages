import 'stylesheets/app.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Pages from 'pages'
import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import setupIcons from 'stylesheets/fontawesome'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ToastContainer } from 'react-toastify'


setupIcons()

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'same-origin',
  },
  request: operation => {
    const csrfToken = document
      .querySelector('meta[name=csrf-token]')
      .getAttribute('content')

    operation.setContext({
      headers: { 'X-CSRF-Token': csrfToken },
    })
  },
  uri: 'http://localhost:3000/graphql',
  connectToDevTools: true,
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <ToastContainer/>
          <Pages className="max">
            <ReactHelmet>
              <meta charSet="utf-8" />
              <title>Cultage</title>
            </ReactHelmet>
          </Pages>
        </ApolloHooksProvider>
      </ApolloProvider>
    )
  }
}

export default App
