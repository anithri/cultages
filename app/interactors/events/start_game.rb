module Events
  class StartGame
    include Interactor::Organizer

    organize Steps::DealCards,
             Steps::SaveGame

  end
end
