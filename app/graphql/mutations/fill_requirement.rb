module Mutations
  class FillRequirement < BaseMutation
    field :game, Types::Game, null: false

    argument :dice_requirement_id, ID, required: true, as: :id

    def resolve(id:)
      Events::FillRequirement.call(id: id)
    end
  end
end
