class Steps::FulfillRequirement
  include Interactor
  ERR='die_requirement not changed: dice already filled'
  delegate :dice_requirement,  :game, to: :context

  def call
    dice_requirement.fulfill(game.selected_dice) || context.fail!(error: ERR)
    game.deselect_dice
    game.send_message('success', 'Requirement Met')
  end
end
