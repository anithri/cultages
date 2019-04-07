class Steps::GetDiceRequirement
  include Interactor
  ERR = 'dice_requirement_id missing'

  delegate :dice_requirement, :dice_requirement_id, :card, :game, to: :context
  before do
    context.fail!(error: ERR + '!!!') unless dice_requirement_id
  end

  def call
    requirement              = DiceRequirement.includes(:card).find(dice_requirement_id)
    card_id                  = requirement.card_id
    game_id                  = requirement.card.game_id
    context.game             = Game.tree.find(game_id)
    context.card             = game.cards.find(card_id)
    context.dice_requirement = card.dice_requirements.find(dice_requirement_id)

    context.fail!(error: 'Something went wrong, missing records') unless
      went_well
    context.fail!(error: 'not valid requirement') unless dice_requirement
                                                          .fillable
  end

  def went_well
    (card && game && dice_requirement)
  end
end
