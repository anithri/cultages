const {commonParams} = require('../base/index.js')

const doInstall = (section, args) =>
  !args.hasOwnProperty(section) || args[section]

module.exports = {
  params: ({ args }) => {
    //console.log(args)
    const data = commonParams(args)

    return data
  },
}
