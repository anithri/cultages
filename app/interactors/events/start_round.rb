module Events
  class StartRound < Base

    class DoEvent
      include Interactor::Organizer
      organize Steps::StartRound,
               Steps::SaveGame
    end

    def call
      DoEvent.call game: game
    end
  end
end
