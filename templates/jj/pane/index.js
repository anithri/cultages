// my-generator/my-action/index.js
const cc = require('change-case')
const srcPath = require('../../../.hygen').helpers.src
const CSS_FILE_NAME = 'styles.module.css'

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.panePath = srcPath('panes', pascal, 'index.js')
    args.paneName = pascal + 'Pane'
    args.cssName = camel
    args.cssImportPath = './' + CSS_FILE_NAME
    args.cssPath = srcPath('panes', pascal, CSS_FILE_NAME)

    console.log('args', args)
    return args
  },
}
