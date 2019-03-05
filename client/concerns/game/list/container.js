import { GET_GAME_LIST } from './query'
import { parseGameList } from './utils'
import { createListOfContainer } from 'concerns/base'

export const GameListContainer = Display =>
  createListOfContainer({
    Display,
    concern: 'games',
    parser: parseGameList,
    query: GET_GAME_LIST,
  })
