module Events
  module FillRequirement
    class Event
      include Interactor::Organizer

      organize Steps::GetDiceRequirement,
               Steps::FulfillRequirement,
               Steps::ScoreCard
               # Steps::SaveGame
    end

    def self.call(id:)
      Event.call(dice_requirement_id: id)
      result = Event.call dice_requirement: dice_requirement
      if result.success?
        {game: result.game}
      else
        {game: nil, error: result.error}
      end
    end
  end
end
