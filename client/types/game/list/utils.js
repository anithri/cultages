import { parseGame } from '../utils'

export const parseGameList = ({ all }) => {
  return all.map(({ game }) => (parseGame(game)))
}
