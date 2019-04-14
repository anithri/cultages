const { cc, clientPath, CSS_FILE_NAME } = require(process.cwd() +
  '/.hygen').helpers

const partTypes = {
  components: {
    dir: 'components',
    name: 'components',
  },
  page: {
    dir: 'pages',
    name: 'page',
    selector: 'pages',
  },
  pane: {
    dir: 'panes',
    name: 'pane',
    selector: 'panes',
  },
  styled: {
    dir: 'components',
    name: 'styled',
  },
}

const getPartType = args => Object.values(partTypes).find(pt => args[pt.name])
const getParent = args => args[args.partType.name]

module.exports = {
  params: ({ args }) => {
    const camel = cc.camel(args.name)
    const pascal = cc.pascal(args.name)

    const partType = getPartType(args)

    args.partType = partType

    args.parent = getParent(args)

    args.partPath = clientPath(partType.dir, args.parent, `${pascal}.js`)

    args.partClass = pascal
    args.cssFile = './' + CSS_FILE_NAME
    args.cssPath = clientPath(partType.dir, args.parent, CSS_FILE_NAME)
    args.cssSelector = camel

    console.log('args', args)
    return args
  },
}
