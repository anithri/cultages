import { parseCard } from '../utils'

export const parseCardList = ({ all }) => {
  return all.map(({ card }) => (parseCard(card)))
}
