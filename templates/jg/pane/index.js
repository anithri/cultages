const {
  clientPath,
  cc,
  CSS_FILE_NAME,
  inflection: { pluralize },
} = require(`${process.cwd()}/.hygen`).helpers

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.cssPath = clientPath('panes', pascal, CSS_FILE_NAME)
    args.cssImportPath = `./${CSS_FILE_NAME}`
    args.paneName = pascal
    args.cssName = camel
    args.paneContainedPath = null
    args.panePlainPath = null
    args.containedName = null
    args.shapeName = null
    args.containerName = null
    args.concernPath = null

    if (args.concern) {
      const list = args.list ? 'List' : ''
      const basePascalContainer = cc.pascal(args.concern)
      const baseCamelContainer = cc.camel(basePascalContainer)

      const pascalContainer = basePascalContainer + list
      const camelContainer = baseCamelContainer + list

      args.concernPath = `concerns/${pascalContainer}`
      args.paneContainedPath = clientPath('panes', pascal, 'index.js')
      args.containedName = args.list
        ? pluralize(baseCamelContainer)
        : camelContainer

      args.shapeName = camelContainer + 'Shape'
      args.containerName = pascalContainer + 'Container'
    } else {
      args.panePlainPath = clientPath('panes', pascal, 'index.js')
    }

    console.log('args', args)
    return args
  },
}
