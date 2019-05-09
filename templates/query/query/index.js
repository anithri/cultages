const { commonParams } = require('../base')

module.exports = {
  params: ({ args }) => {
    const data = commonParams(args)

    if (data.skipQuery) data.pathFor = data.nullPath
    data.queryListPath = data.list ? data.pathFor : data.nullPath
    data.queryPath = data.list ? data.nullPath : data.pathFor
    data.path = data.importPath('query')
    console.log(data)
    return data
  },
}
