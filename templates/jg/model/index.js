const cc = require('change-case')
const inflection = require('inflection')
const { src: srcPath } = require('../../../.hygen').helpers

module.exports = {
  params: ({ args }) => {
    //console.log(args)
    const camel = cc.camel(args.name)
    const pascal = cc.pascal(args.name)
    const SCREAMING = cc.upper(cc.snake(args.name))
    return {
      ...args,
      idName: `${camel}Id`,
      varName: camel,
      listVarName: inflection.pluralize(camel),
      FRAGMENT_NAME: `${SCREAMING}_FRAGMENT`,
      fragmentName: `${camel}Fragment`,
      LIST_FRAGMENT_NAME: `${SCREAMING}_LIST_FRAGMENT`,
      listFragmentName: `${camel}ListFragment`,
      shapeName: `${camel}Shape`,
      listShapeName: `${camel}ListShape`,
      parseName: `parse${pascal}`,
      listParseName: `parse${pascal}List`,
      mkPath: (...parts) => srcPath('models', camel, ...parts),
      graphQLName: pascal,
    }
  },
}
