module Steps
  class ShuffleCards < Base
    delegate :game, to: :context
    before do
      context.fail!(message: 'No game present') unless game
    end

    def call
      cards               = Card.all.shuffle
      game.card_locations = cards.map.with_index do |card, idx|
        CardLocation.new(
          card:      card,
          purpose:   :draw,
          sortOrder: idx
        )
      end
    end
  end
end
