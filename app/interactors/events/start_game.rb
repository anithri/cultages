module Events
  class StartGame < Base

    class Event
      include Interactor::Organizer
      organize Steps::DealCards,
               Steps::SaveGame
    end

    def call
      result = Event.call game: game
      {game: game}
    end
  end
end
