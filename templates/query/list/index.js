const { clientPath, cc, inflection } = require('../../../.hygen').helpers

const skipTemplate = (section, args) =>
  !args.hasOwnProperty(section) || args[section]

module.exports = {
  params: ({ args }) => {
    //console.log(args)
    const camel = cc.camel(args.name)
    const pascal = cc.pascal(args.name)
    const SCREAMING = cc.upper(cc.snake(args.name))

    const data = {
      ...args,
      baseName: camel,
    }

    if (doInstall('container', args)) {
      data.containerName = `${pascal}Container`
      data.containerPath = clientPath('concerns', 'container.js')
      if (doInstall('list', args)) {
        data.containerListName = `${pascal}Container`
        data.containerPath = clientPath('concerns', 'container.js')
      }
    }

    const b = {
      idName: `${camel}Id`,
      varName: camel,
      listVarName: inflection.pluralize(camel),
      QUERY_NAME: `GET_${SCREAMING}`,
      FRAGMENT_NAME: `${SCREAMING}_FRAGMENT`,
      fragmentName: `${camel}Fragment`,
      LIST_QUERY_NAME: `GET_${SCREAMING}_LIST`,
      LIST_FRAGMENT_NAME: `${SCREAMING}_LIST_FRAGMENT`,
      listFragmentName: `${camel}ListFragment`,
      shapeName: `${camel}Shape`,
      listShapeName: `${camel}ListShape`,
      parserName: `parse${pascal}`,
      listParserName: `parse${pascal}List`,
      mkPath: (...parts) => srcPath('concerns', camel, ...parts),
      graphQLName: pascal,
      skipTemplate,
    }

    return data
  },
}
