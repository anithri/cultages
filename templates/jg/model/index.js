const cc = require('change-case')
const inflection = require('inflection')
const { src: srcPath } = require('../../../.hygen').helpers

module.exports = {
  params: ({ args }) => {
    //console.log(args)
    const singular = inflection.singularize(args.name)
    const plural = inflection.pluralize(singular)
    const camel = cc.camel(singular)
    const pascal = cc.pascal(singular)
    const SCREAMING = cc.upper(cc.snake(singular))

    const result = {
      ...args,
      indexPath: srcPath('models', camel, 'index.js'),
      FRAGMENT_NAME: SCREAMING + '_FRAGMENT',
      fragmentName: camel + 'Fragment',
      fragmentPath: srcPath('models', camel, 'fragment.js'),
      graphqlName: pascal,
      shapePath: srcPath('models', camel, 'shape.js'),
    }

    if (args.list)
      Object.assign(result, {
        LIST_FRAGMENT_NAME: SCREAMING + '_LIST_FRAGMENT',
        listFragmentName: camel + 'ListFragment',
        listGraphqlName: cc.pascal(plural),
        listFragmentPath:
          args.listFragment && srcPath('models', camel, 'list', 'fragment.js'),
        listShapePath: srcPath('models', camel, 'list', 'shape.js'),
      })

    const list = {}

    return {
      ...result,
      ...list,
    }
  },
}
