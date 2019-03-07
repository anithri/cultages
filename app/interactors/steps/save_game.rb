module Steps
  class SaveGame < Base
    delegate :game, to: :context
    before do
      context.fail!(message: 'No game present') unless game
    end

    def call
      if game.save
        game.setup_game
        context.errors = []
      else
        context.errors = game.errors.full_messages
        context.fail!
      end
    rescue ArgumentError => e
      warn game.inspect
      warn e.backtrace.inspect
    end
  end
end
