import { gql } from 'apollo-boost'

export const PLAYER_FRAGMENT = gql`
  fragment playerFragment on Player {
    id
    name
    slug
  }
`
