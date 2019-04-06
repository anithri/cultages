import { parseCardSlot } from '../utils'

export const parseCardSlotList = cardSlots => {
  console.log('parseCardSlotList', cardSlots)
  return cardSlots.map(cardSlot => parseCardSlot(cardSlot))
}
