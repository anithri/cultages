class Steps::FulfillRequirement
  include Interactor

  delegate :dice_requirement, :dice, :game, to: :context

  def call
    dice_requirement.dice = dice
    game.selected_dice    = nil
  end
end
