import PropTypes from 'prop-types'
import * as THREE from 'three'

export const cornerShape = PropTypes.shape({
  id: PropTypes.string.required,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  category: PropTypes.string,
  vector: PropTypes.instanceOf(THREE.Vector3),
})
