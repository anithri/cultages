module Events
  class StartRound < Base

    class Event
      include Interactor::Organizer
      organize Steps::StartRound,
               Steps::SaveGame
    end

    def call
      Event.call game: game
    end
  end
end
