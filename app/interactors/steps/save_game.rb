module Steps
  class SaveGame < WithGameBase

    def call
      if game.save
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
