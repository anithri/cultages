import { parseDice } from '../utils'

export const parseDiceList = ({ all }) => {
  return all.map(({ dice }) => (parseDice(dice)))
}
