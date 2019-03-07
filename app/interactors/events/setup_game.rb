module Events
  class SetupGame
    include Interactor::Organizer

    organize Steps::SetupGame,
             Steps::SeatPlayers,
             Steps::ShuffleCards,
             Steps::SaveGame
  end
end
