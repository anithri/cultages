const sourcePaths = {
}

const sourcePath = dest => sourcePaths[dest] || `client/${dest}/`

const extRegex = /^\./

const pathTo = (source, ...parts) => {
  if (parts.slice(-1)[0].match(extRegex)) {
    const ext = parts.pop()
    parts[parts.length - 1] = parts[parts.length - 1] + ext
  }
  return sourcePath(source) + parts.join('/')
}

module.exports = {
  helpers: {
    src: pathTo,
  },
}
