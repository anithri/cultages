import { GET_GAME_LIST } from './query'
import { parseGameList } from 'models/game'
import { createListOfContainer } from 'concerns/base'

export const GameListContainer = args =>
  createListOfContainer({
    concern: 'games',
    parser: parseGameList,
    query: GET_GAME_LIST,
    ...args,
  })
