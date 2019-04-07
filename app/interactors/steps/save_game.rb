module Steps
  class SaveGame < WithGameBase

    def call
      if !game.save
        context.errors = game.errors.full_messages
        context.fail!
      end
    end
  end
end
