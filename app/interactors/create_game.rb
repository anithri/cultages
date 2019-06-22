class CreateGame
  include Interactor

  before do
    context.name_generator ||= NameGenerator.random
  end
  
  def call
    context.game = Game.create(
      name: name,
      options: {woot: 'Prime'}
    )
    if !context.game.valid?
      context.fail! error: 'Invalid game'
    end
  end
  
  def name
    context.name ||= context.name_generator.game
  end
end
