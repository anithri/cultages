/* required values
      cssFile
      cssPath
      cssSelector
      pageClass
      pageImportPath
      pagePath
      pageRoute
      routePath
 */
const cc = require('change-case')
const srcPath = require('../../../.hygen').helpers.src

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.pageName = pascal + 'Page'
    args.pagePath = srcPath('pages', `${pascal}.js`)

    args.pageDataPath = srcPath('concerns', 'examplePages', 'pages.yml')
    args.pagePathPath = '/' + camel
    args.pageLabel = cc.title(camel)

    //console.log('args', args)
    return args
  },
}
