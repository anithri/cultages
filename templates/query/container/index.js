const { clientPath, cc, inflection } = require('../../../.hygen').helpers
const { commonParams } = require('../base/index.js')
module.exports = {
  params: ({ args }) => {
    const data = commonParams(args)

    if (data.skipContainer) data.pathFor = data.nullPath
    return data
  },
}
