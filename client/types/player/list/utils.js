import { parsePlayer } from '../utils'

export const parsePlayerList = ({ all }) => {
  return all.map(({ player }) => (parsePlayer({player})))
}
