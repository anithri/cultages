import { gql } from 'apollo-boost'

export const GAME_LIST_FRAGMENT = gql`
  fragment gameListFragment on GameConnection {
    all: edges {
      game: node {
        id
        name
      }
    }
  }
`

export const GET_GAME_LIST = gql`
  query getGameList {
    games {
      ...gameListFragment
    }
  }
  ${GAME_LIST_FRAGMENT}
`
