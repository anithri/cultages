import { parseCardSlotList } from 'models/cardSlot'
import { parsePlayerList } from 'models/player'

export const parseGame = ({ game }) => {
  //console.log('parseGame', game)
  return {
    ...game,
    boardSlots: parseCardSlotList(game.boardSlots),
    players: parsePlayerList(game.players),
  }
}
