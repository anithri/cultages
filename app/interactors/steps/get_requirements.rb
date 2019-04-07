class Steps::GetRequirements
  include Interactor

  delegate :dice_requirement, :game, :card, :dice, :player

  def call
    context.game = dice_requirement.game
    context.dice = game.selected_dice.first
    context.card = dice_requirement.card
    # get requirements, game, selected card, player, selected dice
    # bail if no requirement, card, player, or dice
  end
end
