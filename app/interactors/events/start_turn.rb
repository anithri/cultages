module Events
  class StartTurn < Base
    class Event
      include Interactor::Organizer
      organize Steps::StartTurn,
               Steps::SaveGame
    end

    def call
      Event.call game: game
    end
  end
end
