const {
  clientPath,
  cc,
  nameMaker,
  nullPath,
} = require('../../../.hygen').helpers
const fs = require('fs')

const containerTypes = {
  route: 'createRouteContainer',
  id: 'createByIdContainer',
  listOf: 'createListOfContainer',
}
const shellCmd = (args, concern) => {
  return args[`skip${cc.pascal(concern)}`]
    ? `echo "  skipping ${concern}`
    : `hygen query exporter --name ${data.varName} --path ${data.path}`
}
const commonParams = args => {
  console.log('commomParams!', args)
  if (args.list && !args.mode) args.mode = 'list'
  const names = nameMaker(args)
  const data = {
    nullPath,
    pathFor: clientPath('concerns', names.base, names.mode),
    exportPath: clientPath('concerns', names.base)('index.js'),
    importPath: (...parts) =>
      ['.', names.mode, ...parts].filter(p => p).join('/'),
    varName: names.mode,
    idName: `${names.base}Id`,
    pluralVar: names.plural,
    QUERY_NAME: `GET_${names.SCREAMING}`,
    queryName: `get${names.Mode}`,
    FRAGMENT_NAME: `${names.SCREAMING}_FRAGMENT`,
    fragmentName: `${names.name}Fragment`,
    parserName: `parse${names.Name}`,
    shapeName: `${names.name}Shape`,
    baseShapeName: `${names.base}Shape`,
    graphQLName: `${names.Base}`,
    baseContainer: containerTypes[args.containerBase || 'route'],
    containerName: `${names.Name}Container`,
    skipContainer: shellCmd(args, 'container'),
    skipFragment: !!args.skipFragment,
    skipQuery: !!args.skipQuery,
    skipParser: !!args.skipParser,
    skipShape: !!args.skipShape,
    ...args,
  }
  return data
}

module.exports = {
  commonParams,
  params: ({ args }) => {
    const skip = fs.existsSync(clientPath('concerns/base'))
    const data = { ...args }
    data.message = skip && '{green concerns/base skipped}'
    data.pathFor = skip ? nullPath : clientPath('concerns/base')

    // console.log(data)
    return data
  },
}
