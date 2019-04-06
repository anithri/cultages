import { parseGame } from '../utils'

export const parseGameList = ({ games: { all } }) => {
  console.log('parseGameList', all)
  return all.map(({ game }) => game)
}
