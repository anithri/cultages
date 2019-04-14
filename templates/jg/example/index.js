/*
 * 1:/*
 * 2: * Copyright (c) $year.  Cermak, Peterka, & Peterson.
 * 3:
 *
 */

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
const cc = require('change-case/change-case')
const srcPath = require('.hygen').helpers.srcPath

const CSS_FILE_NAME = 'styles.module.css'

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.exampleName = pascal
    args.examplePath = srcPath('examples', pascal, 'index.js')

    args.cssPath = srcPath('examples', pascal, CSS_FILE_NAME)
    args.cssImportPath = './' + CSS_FILE_NAME
    args.cssName = camel

    console.log('args', args)
    return args
  },
}
