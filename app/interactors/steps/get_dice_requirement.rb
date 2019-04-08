class Steps::GetDiceRequirement
  include Interactor
  ERR               = 'dice_requirement missing'
  SELECTED_DICE_ERR = 'no dice selected'
  delegate :card, :dice, :dice_requirement, :dice_requirement_id,  :game, to:
    :context
  before do
    context.fail!(error: ERR + '!!!') unless dice_requirement_id
  end

  def call
    requirement  = DiceRequirement.includes(:card).find(dice_requirement_id)
    card_id      = requirement.card_id
    game_id      = requirement.card.game_id
    context.game = Game.tree.find(game_id)
    Rails.logger.warn ['Selected Dice', game.selected_dice].inspect
    context.fail!(error: SELECTED_DICE_ERR) unless game.selected_dice

    context.card             = game.cards.find(card_id)
    context.dice_requirement = card.dice_requirements.find(dice_requirement_id)
    context.dice             = game.find_die(game.selected_dice_id)
    context.dice_owner       = dice.player
    context.player           = game.current_player
    context.fail!(error: 'Something went wrong, missing records') unless went_well
    context.fail!(error: 'not valid requirement') unless dice_requirement
                                                           .fillable
  end

  def went_well
    (card && game && dice_requirement)
  end
end
