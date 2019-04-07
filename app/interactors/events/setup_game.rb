module Events
  class SetupGame < Base

    class Event
      include Interactor::Organizer
      organize Steps::SeatPlayers,
               Steps::SetupCards,
               Steps::SaveGame
    end

    def call
      r = Event.call game: game
    end
  end
end
