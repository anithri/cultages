const fillColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow']
const altitudeColors = [
  'darkblue',
  'blue',
  'lightblue',
  'palegreen',
  'palegreen',
  'lightgreen',
  'lightgreen',
  'springgreen',
  'springgreen',
  'seagreen',
  'seagreen',
  'yellowgreen',
  'palegoldenrod',
  'burleywood',
  'goldenrod',
  'darkgoldenrod',
  'saddlebrown',
  'brown',
  'darkslategray',
  'white',
]
const altitudeFactor = 10000

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
  console.log(hex.altitude)

  ctx.fillStyle =
    altitudeColors[
      Math.floor((altitudeColors.length * hex.altitude) / altitudeFactor)
    ]
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
