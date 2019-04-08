class Steps::FulfillRequirement
  include Interactor
  ERR = 'die_requirement not changed: dice already filled'
  delegate :dice, :dice_requirement, :game, :player, :dice_owner, to: :context

  def call
    dice_requirement.fulfill(game.selected_dice) || context.fail!(error: ERR)
    game.send_message('success', 'Requirement Met')
    if dice.player != player
      dice_owner.earn(2)
      dice_owner.save
      player.spend(2)
      game.send_message('warning', "paid 2 to #{dice_owner.name}")
    end
    game.deselect_dice
  end
end

