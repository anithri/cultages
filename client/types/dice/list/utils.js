import { parseDice } from '../utils'

export const parseDiceList = bag => bag.map(dice => parseDice(dice))
