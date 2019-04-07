module Events
  class StartGame < Base

    class Event
      include Interactor::Organizer
      organize Steps::ShuffleCards,
               Steps::DealCards,
               Steps::SaveGame
    end

    def call
      Event.call game: game
      game.send_message('success', 'Game Started')
      game.send_message('info', game.current_player.name + ", it's your turn")
      {game: game}
    end
  end
end
