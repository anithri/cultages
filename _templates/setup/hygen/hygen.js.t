---
to: <%= hygenPath %>
unless_exists: true
---
const cc = require('change-case')
const inflection = require('inflection')
const CSS_FILE_NAME = 'styles.module.css'
const pathTo = require('./.hygen/pathTo').pathTo

const basePath = new pathTo(process.cwd())
const paths = {
  <%- paths %>
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
    pathTo: basePath,
    paths,
  },
}
