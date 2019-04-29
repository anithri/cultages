const fillColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow']
export const drawHex = ({
  canvas,
  hex,
  offset,
  strokeColor = 'darkgray',
  fillColor = 'lightblue',
}) => {
  const center = hex.toPoint().add(offset)
  const ctx = canvas.getContext('2d')
  const corners = hex.corners().map(h => {
    const corner = h.add(center)
    return [corner.x, corner.y]
  })

  ctx.fillStyle = fillColors[Math.floor(Math.random() * fillColors.length)]
  ctx.strokeStyle = strokeColor

  ctx.beginPath()
  ctx.moveTo(...corners[5])
  corners.forEach(c => {
    ctx.lineTo(...c)
    ctx.stroke()
  })
  ctx.closePath()
  ctx.fill()
}
