import { parseCardSlot } from 'models/cardSlot'
import { parseDiceList } from 'models/dice'

export const parsePlayer = ({ player, ...props }) => {
  //console.log('parsePlayer', player, props)
  return {
    ...player,
    playerSlot: parseCardSlot(player.playerSlot),
    dice: parseDiceList(player.dice),
  }
}
