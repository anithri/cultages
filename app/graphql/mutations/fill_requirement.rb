module Mutations
  class FillRequirement < BaseMutation
    field :game, Types::Game, null: false

    argument :dice_requirement_id, ID, required: true

    def resolve(dice_requirement_id:)
      Events::FillRequirement.call(dice_requirement_id: dice_requirement_id)
    end
  end
end
