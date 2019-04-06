import { parseCardSlot } from 'types/cardSlot'
import { parseDiceList } from 'types/dice'

export const parsePlayer = ({ player, ...props }) => {
  console.log('parsePlayer', player, props)
  return {
    ...player,
    playerSlot: parseCardSlot(player.playerSlot),
    dice: parseDiceList(player.dice),
  }
}
