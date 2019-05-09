const { commonParams } = require('../base')

module.exports = {
  params: ({ args }) => {
    const data = commonParams(args)

    if (data.skipParser) data.pathFor = data.nullPath

    data.parserListPath = data.list ? data.pathFor : data.nullPath
    data.parserPath = data.list ? data.nullPath : data.pathFor

    console.log(data)
    return data
  },
}
