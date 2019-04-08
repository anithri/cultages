module Steps
  class DealCards < WithGameBase
    def call
      Card::DEAL_CARDS.each_pair do |location, count|
        next if count.zero?
        game.deal(count, to: location)
      end
    end
  end
end
