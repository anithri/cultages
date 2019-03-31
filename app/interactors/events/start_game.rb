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
      {game: game}
    end
  end
end
