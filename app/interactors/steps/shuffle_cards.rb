module Steps
  class ShuffleCards < WithGameBase

    def call
      cards               = Card.all.shuffle
      game.card_locations = cards.map.with_index do |card, idx|
        CardLocation.new(
          card:      card,
          purpose:   :draw,
          sort_order: idx
        )
      end
    end
  end
end
