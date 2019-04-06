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

const CSS_FILE_NAME = 'styles.module.css'

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.examplePath = srcPath('examples', pascal, 'index.js')
    args.cssPath = srcPath('examples', pascal, CSS_FILE_NAME)
    args.cssImportPath = './' + CSS_FILE_NAME
    args.exampleName = pascal
    args.cssName = camel

    //console.log('args', args)
    return args
  },
}
