---
to: <%= mkPath('list/utils.js') %>
---
import { <%= parseName %> } from '../utils'

export const <%= listParseName %> = ({ all }) => {
  return all.map(({ <%= varName %> }) => (<%= parseName %>(<%= varName %>)))
}
