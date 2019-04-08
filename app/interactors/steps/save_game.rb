module Steps
  class SaveGame < WithGameBase

    def call
      if !game.save
        context.errors = game.errors.full_messages
        game.errors.full_messages.each do |msg|
          game.send_message('fail', msg)
        end
        context.fail!
      end
    end
  end
end
