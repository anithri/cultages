module Events
  module FillRequirement
    class Event
      include Interactor::Organizer

      organize Steps::GetDiceRequirement,
               Steps::FulfillRequirement,
               Steps::ScoreCard,
               Steps::SaveGame
    end

    def self.call(dice_requirement_id:)
      result = Event.call(dice_requirement_id: dice_requirement_id)
      if result.success?
        {game: result.game, result: result}
      else
        {game: nil, error: result.error, result: result}
      end
    end
  end
end
