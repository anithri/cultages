module Steps
  class ShuffleCards < WithGameBase

    def call
      cards = Card.all.shuffle.to_a
      location_data = cards.map.with_index do |card, idx|
        {
          card:       card,
          purpose:    :draw,
          sort_order: idx
        }
      end
      game.card_locations.create location_data
    end
  end
end
