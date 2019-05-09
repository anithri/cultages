const cc = require('change-case')
const inflection = require('inflection')
const CSS_FILE_NAME = 'styles.module.css'

const pathTo = (...base) => (...more) => (...paths) =>
  [...base, ...more, ...paths].filter(p => p).join('/')

const nullPath = (...parts) => null

const sourcePaths = {
  railsPath: pathTo('app'),
  clientPath: pathTo('client'),
}

const nameMaker = args => {
  args.mode = args.mode || ''
  const data = {
    base: cc.camel(args.name),
    Base: cc.pascal(args.name),
    mode: args.mode,
    Mode: cc.pascal(args.mode),
  }

  data.name = data.base + data.Mode
  data.Name = data.Base + data.Mode
  data.SCREAMING = cc.constant(data.name)
  data.plural = inflection.pluralize(data.base)
  return data
}

module.exports = {
  helpers: {
    cc,
    CSS_FILE_NAME,
    inflection,
    nameMaker,
    nullPath,
    pathTo,
    ...sourcePaths,
  },
}
