module Steps
  class ShuffleCards < WithGameBase

    def call
      game.cards.shuffle.each_with_index.map do |card, idx |
        card.slug = idx
      end
    end
  end
end
