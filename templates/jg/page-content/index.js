const {
  paths,
  nameMaker,
  CSS_FILE_NAME
} = require(`${process.cwd()}/.hygen`).helpers
console.log(paths)
module.exports = {
  params: ({ args }) => {
    const {name, Name, names} = nameMaker(args)
    args.routes = (args.route !== false) && (args.route || `/${names}/:id`)
    args.routePath = args.routes && paths.client.path('pages', 'index.js')
    args.pageImportPath = paths.client.path('pages', Name)

    args.pageName = Name
    args.pagePath = paths.client.path('pages',Name,'index.js')

    args.cssFile = './' + CSS_FILE_NAME
    args.cssPath = paths.client.path('pages', Name, CSS_FILE_NAME)
    args.cssName = name

    console.log('args', args)
    return args
  },
}
