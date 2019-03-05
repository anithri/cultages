export const parseGame = ({ game }) => ({
  ...game,
  players: game.players.all.map(({ player }) => player),
})
