import { parseCard } from '../utils'

export const parseCardList = cards => cards.map(card => parseCard(card))
