module CardSlots
  extend ActiveSupport::Concern

  included do
    has_many :cards, autosave: true,
             dependent: :destroy, inverse_of: :game

    Card::LOCATIONS.each do |loc|
      define_method(loc) do
        cards.to_a.select{|c| c.location.to_s == loc.to_s}
      end
    end

    def card_slots
      cards.to_a.select{|c| Card::PUBLIC_LOCATIONS.include? c.location}
    end
  end

  def deal(count = 1, to: :discards, from: :draw)
    self.send(from).first(count).each{|c| c.location = to}
  end
end
