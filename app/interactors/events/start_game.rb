module Events
  class StartGame < Base

    class Event
      include Interactor::Organizer
      organize Steps::DealCards,
               Steps::SaveGame
    end

    def call
      result = Event.call game: game
      game.next_round!
      game.next_player!
      {game: game}
    end
  end
end
