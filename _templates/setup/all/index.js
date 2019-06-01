const fs = require('fs')
const path = require('path')
const basePath = process.cwd()
const packageJson = require(basePath + '/package.json')
console.log(process.env['HYGEN_TEMPLS'] || 'woot')
const templatePath = `${basePath}/${process.env['HYGEN_TEMPLS'] || '_templates'}`


const pathTemplate = {
  rails: 'app',
  ruby: 'lib',
  client: 'client',
  src: 'src',
}

const generatePaths = () => {
  const paths = ['root: basePath,']
  Object.entries(pathTemplate).forEach(([k, v]) => {
    const sectionPath = path.resolve(basePath,v)
    if (fs.existsSync(sectionPath)) paths.push(`  ${k}: basePath.add('${v}'),`)
  })
  if (fs.existsSync('client')) {
    paths.push("  js: basePath.add('client'),")
  } else if (fs.existsSync('src')) {
    paths.push("  js: basePath.add('src'),")
  }
  return paths.join('\n')
}

module.exports = {
  params: ({ args }) => {
    args.paths = generatePaths()
    args.hygenPath = path.resolve(basePath, '.hygen.js')
    args.pathToPath = path.resolve(basePath, '.hygen', 'pathTo.js')
    args.stage2Path = path.resolve(__dirname,'../../..','stage2')
    args.stage2Copy = `cp -r ${args.stage2Path} ${templatePath}`
    args.repoUrl = `'${packageJson.repository}'`
    args.packageAdd = `yarn add --dev '${args.repoUrl}'`
    console.log(args)
    return args
  },
}
