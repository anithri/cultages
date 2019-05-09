const { clientPath, cc, inflection } = require('../../../.hygen').helpers
const { commonParams } = require('../base')

module.exports = {
  params: ({ args }) => {
    const data = commonParams(args)

    if (data.skipFragment) data.pathFor = data.nullPath

    console.log(data)
    return data
  },
}
