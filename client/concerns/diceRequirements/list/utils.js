import { parseDiceRequirements } from '../utils'

export const parseDiceRequirementsList = ({ all }) => {
  return all.map(({ diceRequirements }) => (parseDiceRequirements(diceRequirements)))
}
