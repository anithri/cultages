module Events
  class StartGame < Base

    class DoEvent
      include Interactor::Organizer
      organize Steps::DealCards,
               Steps::SaveGame
    end

    def call
      DoEvent.call game: game
      game.next_round!
      {game: game}
    end
  end
end
