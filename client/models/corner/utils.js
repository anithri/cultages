import * as THREE from 'three'
export const parseCorner = corner => ({
  ...corner,
  vector: new THREE.Vector3(corner.x, corner.y, corner.z),
})
