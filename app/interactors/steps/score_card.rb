class Steps::ScoreCard
  include Interactor

  delegate :dice_requirement, :dice_requirement_id, :dice,
           :player, :card, :game, to: :context

  def call
    return unless card.fulfilled?

    card.dice_requirements.each do |dr|
      dr.dice.value = 0
      dr.dice       = nil
    end

    game.deal(to: card.location)

    player.money += 4
    card.location = :discards
  end
end
