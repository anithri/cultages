import { parseCardSlot } from '../cardSlot'

export const parseGame = ({ game }) => ({
  ...game,
  players: game.players.all.map(({ player }) => player),
  boardSlots: game.boardSlots.map(slot => parseCardSlot(slot)),
})
