module Events
  class Base
    attr_reader :game
    def initialize(game, args = {})
      @game = game
      @args = args
    end
  end
end

