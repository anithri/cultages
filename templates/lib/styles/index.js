const { clientPath } = require(process.cwd() + '/.hygen.js').helpers
module.exports = {
  params: ({ args }) => {
    args.sitePath = clientPath('styles', 'site.css')
    args.mediaPath = clientPath('styles', '__media.css')
    args.palettePath = clientPath('styles', '__palette.css')
    args.variablesPath = clientPath('styles', '__variables.css')

    console.log('args', args)
    return args
  },
}
