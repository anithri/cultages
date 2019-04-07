import { parseCardList } from 'models/card'

export const parseCardSlot = cardSlot => {
  //console.log('parseCardSlot', cardSlot)
  return {
    ...cardSlot,
    cards: parseCardList(cardSlot.cards),
  }
}
