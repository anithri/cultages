const { clientPath, cc } = require(process.cwd() + '/.hygen').helpers

module.exports = {
  params: ({ args, ...props }) => {
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.indexPath = clientPath('concerns', camel, 'index.js')
    console.log('args', args)
    process.exit(1)
    return args
  },
}
