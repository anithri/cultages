import { parseCorner } from '../utils'

export const parseCornerList = ({ corners: { all } }) =>
  all.map(({ corner }) => parseCorner(corner))
