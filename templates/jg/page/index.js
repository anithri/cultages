const {
  clientPath,
  cc,
  CSS_FILE_NAME,
  useRoutes,
  inflection: { pluralize },
} = require(`${process.cwd()}/.hygen`).helpers

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.pagePlainPath = null
    args.pageContainedPath = null
    args.pageName = pascal

    args.cssFile = './' + CSS_FILE_NAME
    args.cssPath = clientPath('pages', pascal, CSS_FILE_NAME)
    args.cssName = camel

    args.routePath = null

    if (useRoutes) {
      args.routePath = clientPath('pages', 'index.js')
      args.pageImportPath = clientPath('pages', pascal)
      args.pageRoute = `/${args.pageRoute || camel}`

      if (args.list) {
        args.pageRoute = pluralize(args.pageRoute)
      }
    }

    if (args.concern) {
      const list = args.list ? 'List' : ''
      const basePascalContainer = cc.pascal(args.concern)
      const baseCamelContainer = cc.camel(basePascalContainer)

      const pascalContainer = basePascalContainer + list
      const camelContainer = baseCamelContainer + list

      args.pageContainerPath = clientPath('pages', pascal, 'index.js')

      args.concernPath = `concerns/${basePascalContainer}`

      args.pageContainedPath = clientPath('pages', pascal, 'index.js')
      args.containedName = args.list
        ? pluralize(baseCamelContainer)
        : camelContainer

      args.shapeName = camelContainer + 'Shape'
      args.containerName = pascalContainer + 'Container'
    } else {
      args.pagePlainPath = clientPath('pages', pascal, 'index.js')
    }

    console.log('args', args)
    return args
  },
}
