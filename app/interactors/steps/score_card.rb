class Steps::ScoreCard
  include Interactor

  def call
    # bail unless card.dice_requirements all have dice assigned
    # update all card.dice to remove dice_requirements
    # apply card.reward to player
    # discard card
    # draw card into same cardSlot
  end
end
