const { commonParams } = require('../base')

module.exports = {
  params: ({ args }) => {
    const data = commonParams(args)

    if (data.skipShape) data.pathFor = data.nullPath
    data.shapePath = data.list ? data.nullPath : data.pathFor
    data.shapeListPath = data.list ? data.pathFor : data.nullPath
    data.path = data.importPath('shape')
    data.exportSh = data.skipShape
      ? 'echo "skipping shape'
      : `hygen query exporter --name ${data.varName} --path ${data.path}`
    data.message = data.skipShape && '  and import'
    console.log(data)
    return data
  },
}
