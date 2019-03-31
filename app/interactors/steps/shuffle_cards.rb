module Steps
  class ShuffleCards < WithGameBase

    def call
      game.cards.shuffle.each_with_index.map do |card, idx |
        card.sequence = idx
      end
    end
  end
end
