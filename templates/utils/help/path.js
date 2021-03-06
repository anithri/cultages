const extRegex = /^\./

function basePathTo(root) {
  return (source, ...parts) => {
    if (parts.slice(-1)[0].match(extRegex)) {
      const ext = parts.pop()
      parts[parts.length - 1] = parts[parts.length - 1] + ext
    }
    return `${root}/${source}/${parts.join('/')}`
  }
}

module.exports = {
  basePathTo,
}
