---
to: client/concerns/<%= name.toLowerCase() %>/list/container.js
---
import { GET_<%= name.toUpperCase() %>_LIST } from './query'
import { parseMapList } from 'models/<%= name.toLowerCase() %>'
import { createListOfContainer } from 'models/base'

export const <%= h.capitalize(name) %>ListContainer = args =>
  createListOfContainer({
    concern: '<%= name.toLowerCase() %>s',
    parser: parseMapList,
    query: GET_<%= name.toUpperCase() %>_LIST,
    ...args,
  })
