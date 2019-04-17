import * as THREE from 'three'
export const parsePoint = point => ({
  ...point,
  vector: new THREE.Vector3(point.x, point.y, point.z),
})

export const parseHex = hex => ({
  ...hex,
  center: parsePoint(hex.center),
})
