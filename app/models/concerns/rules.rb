module Rules
  extend ActiveSupport::Concern

  NumberOfPlayers = 4
  HandSize = 2

  included do
  end

  class_methods do
    def setup
      game = Events::CreateGame.call
      game.setup_game!
      game
    end
  end
end
