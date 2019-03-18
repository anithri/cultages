module Events
  class SetupGame < Base

    class DoEvent
      include Interactor::Organizer
      organize Steps::NewGame,
               Steps::SeatPlayers,
               Steps::ShuffleCards,
               Steps::SaveGame
    end


    def call
      DoEvent.call game: game
    end
  end
end
