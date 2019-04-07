class Steps::ScoreCard
  include Interactor

  delegate :dice_requirement, :dice,
           :player, :card, :game, to: :context

  def call
    return unless card.fulfilled?

    card.dice_requirements.each do |dr|
      dr.dice.value = 0
      dr.dice.save
      dr.dice       = nil
      dr.save
    end

    game.deal(to: card.location)

    player.earn(4)
    card.discard
  end
end
