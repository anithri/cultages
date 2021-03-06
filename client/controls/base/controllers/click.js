import { createController } from '../controller'
import { asClick } from '../utils'

export const createClickControl = args =>
  createController({
    postMutation: asClick,
    updateMutation: redirectTo,
    ...args,
  })

const redirectTo = ({ history }) => {
  return (
    proxy,
    {
      data: {
        setupGame: { game },
      },
    },
  ) => {
    //console.log('redirectTo - inner', game)
    history.push(game.url)
  }
}
