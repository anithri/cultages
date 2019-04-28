import { Point } from 'honeycomb-grid'

const scaleFactor = (width, height, map) => {
  if (width === 0 || height === 0) return 1
  console.log('scaleFactor', width, height, map.maxX, map.maxY)
  return Math.min(width / map.maxX, height / map.maxY)
}

export const calculateTransforms = ({
  width = 0,
  height = 0,
  map,
  skewH = 0,
  skewV = 0,
}) => {
  const scale = scaleFactor(width, height, map)
  const canvasWidth = map.maxX * scale
  const canvasHeight = map.maxY * scale

  const offset = Point((width - canvasWidth) / 2, (height - canvasHeight) / 2)
  return {
    scale,
    offset,
    canvasWidth,
    canvasHeight,
    width,
    height,
    skewH,
    skewV,
  }
}

export const applyTransforms = ({ transforms, canvasRef }) => {
  if (!timeToDraw(canvasRef)) return

  const { scale } = transforms
  const ctx = canvasRef.current.getContext('2d')
  console.log('applyTransforms', transforms, canvasRef.current)
  ctx.scale(scale, scale)
}

export const timeToDraw = canvasRef => {
  return (
    canvasRef &&
    canvasRef.current &&
    canvasRef.current.width &&
    canvasRef.current.width > 0 &&
    canvasRef.current.height &&
    canvasRef.current.height > 0
  )
}
