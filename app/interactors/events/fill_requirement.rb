module Events
  module FillRequirement
    class Event
      include Interactor::Organizer

      organize Steps::GetRequirements,
               Steps::FulfillRequirement,
               Steps::ScoreCard,
               Steps::SaveGame
    end

    def call(dice_requirement_id:)
      result = Event.call dice_requirement_id: dice_requirement_id
      {game: result.game}
    end
  end
end
