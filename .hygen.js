const { basePathTo } = require('./templates/utils/help/path')
const cc = require('change-case')
const inflection = require('inflection')
const CSS_FILE_NAME = 'styles.module.css'

const sourcePaths = {
  rails: 'app',
  client: 'client',
}

const useRoutes = sourcePaths.client === 'client'

const appPath = basePathTo(sourcePaths.rails)
const clientPath = basePathTo(sourcePaths.client)

module.exports = {
  helpers: {
    appPath,
    cc,
    clientPath,
    CSS_FILE_NAME,
    inflection,
    useRoutes,
  },
}
