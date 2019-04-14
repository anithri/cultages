module.exports = {
  params: ({ args }) => {
    args.pkgJson = process.cwd() + '/package.json'
    args.tmpJson = args.pkgJson + '.orig'
    args.scriptsJson = `${__dirname}/scripts.json`

    args.addScripts = `${__dirname}/addScripts.sh ${args.scriptsJson}`

    args.allDirs = [
      'components',
      'concerns',
      'controls',
      'images',
      'pages',
      'panes',
      'templates',
    ].map(dir => `src/${dir}`)
    args.allKeep = allDirs.map(dir => `${dir}/.gitkeep`)
    args.mkDir = `mkdir ${allDirs.join(' ')}`
    args.touch = `touch ${args.allKeep.join(' ')}`

    console.log('args', args)
    return args
  },
}
