import { parseCorner, parseCornerList } from 'models/corner'

export const parseHex = hex => ({
  ...hex,
  center: parseCorner(hex.center),
  corners: parseCornerList(hex),
})
