import { parseCardSlot } from '../utils'

export const parseCardSlotList = ({ all }) => {
  return all.map(({ cardSlot }) => parseCardSlot(cardSlot))
}
