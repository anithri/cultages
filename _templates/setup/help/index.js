
module.exports = {
  params: ({ args }) => {
    console.log('process.args',process.argv)
    console.log(args)
    return args
  },
}
