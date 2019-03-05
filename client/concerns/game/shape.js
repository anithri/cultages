import PropTypes from 'prop-types'

export const gameShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
})
