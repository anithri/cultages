import { createContainer } from 'models/base/container'
import { emptyQuery, extractData } from 'models/base/utils'
import cc from 'change-case'

export const createListOfContainer = args => {
  const { concern, parser } = args

  return createContainer({
    displayName: cc.camel(concern) + 'Container',
    preQuery: emptyQuery,
    postQuery: extractData(concern, parser),
    ...args,
  })
}
