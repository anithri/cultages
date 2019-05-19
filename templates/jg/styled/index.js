const {
  clientPath,
  cc,
  CSS_FILE_NAME,
} = require(`${process.cwd()}/.hygen`).helpers

module.exports = {
  params: ({ args }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.styledPath = clientPath('components', pascal)('index.js')
    args.cssPath = clientPath('components', pascal)( CSS_FILE_NAME)
    args.cssImportPath = `./${CSS_FILE_NAME}`
    args.styledName = pascal
    args.cssName = camel

    console.log('args', args)
    return args
  },
}
