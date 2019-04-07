import { parseCardSlotList } from 'models/cardSlot'
import { parsePlayerList } from 'models/player'
import {toast} from 'react-toastify'

export const parseGame = ({ game }) => {
  return {
    ...game,
    boardSlots: parseCardSlotList(game.boardSlots),
    players: parsePlayerList(game.players),
  }
}
