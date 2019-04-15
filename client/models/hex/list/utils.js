import { parseHex } from '../utils'

export const parseHexList = ({hexes: {all}}) => all.map(({hex}) => parseHex(hex))
