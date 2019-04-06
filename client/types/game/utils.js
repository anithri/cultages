import { parseCardSlotList } from 'types/cardSlot'
import { parsePlayerList } from 'types/player'

export const parseGame = ({ game }) => {
  console.log('parseGame', game)
  return {
    ...game,
    boardSlots: parseCardSlotList(game.boardSlots),
    players: parsePlayerList(game.players),
  }
}
