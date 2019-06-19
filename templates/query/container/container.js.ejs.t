---
to: <%= pathFor('container.js') %>
---
import { <%= QUERY_NAME %> } from './query'
import { <%= parserName %> } from './utils'
import { <%= baseContainer %> } from 'models/base'

export const <%= containerName %> = args => {
  return <%= baseContainer %>({
    displayName: '<%= containerName %>',
    concern: '<%= varName %>',
    parser: <%= parserName %>,
    query: <%= QUERY_NAME %>,
    ...args,
  })
}


