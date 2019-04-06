/* required values:
      name
      partPath
      partClass
      cssFile
      cssPath
      cssSelector
*/

const cc = require('change-case')
const srcPath = require(process.cwd() + '/.hygen').helpers.src

const CSS_FILE_NAME = 'styles.module.css'

const partTypes = {
  components: {
    dir: 'components',
    name: 'components',
  },
  example: {
    dir: 'examples',
    name: 'example',
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
    // make the canonical Part name
    //console.log(args)
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(args.name)

    const partType = getPartType(args)
    args.partType = partType

    args.parent = cc.pascal(getParent(args))

    args.partPath = srcPath(partType.dir, args.parent, `${pascal}.js`)
    args.partName = args.parent + pascal

    args.cssImportPath = './' + CSS_FILE_NAME
    args.cssPath = srcPath(partType.dir, args.parent, CSS_FILE_NAME)
    args.cssName = camel

    //console.log('args', args)
    return args
  },
}
