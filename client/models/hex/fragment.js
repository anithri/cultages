import { gql } from 'apollo-boost'
import { DICE_REQUIREMENT_FRAGMENT } from 'models/diceRequirement'


export const HEX_FRAGMENT = gql`
  fragment hexFragment on Hex {
    id
    q
    r
    s
    label
    radius
    center {
      id
      x
      y
      z
      category
    }
  }
`
