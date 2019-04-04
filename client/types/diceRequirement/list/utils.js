import { parseDiceRequirement } from '../utils'

export const parseDiceRequirementList = ({ all }) => {
  return all.map(({ diceRequirement }) => (parseDiceRequirement(diceRequirement)))
}
