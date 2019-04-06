import { parseCardList } from 'types/card'

export const parseCardSlot = cardSlot => {
  console.log('parseCardSlot', cardSlot)
  return ({
    ...cardSlot,
    cards: parseCardList(cardSlot.cards),
  })
}
