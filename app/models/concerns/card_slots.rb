module CardSlots
  extend ActiveSupport::Concern

  included do
    Card::LOCATIONS.each do |loc|
      define_method(loc) do
        cards.to_a.select{|c| c.location.to_s == loc.to_s}
      end
    end
    has_many :cards, autosave: true, dependent: :destroy
    def card_slots
      cards.to_a.select{|c| Card::PUBLIC_LOCATIONS.include? c.location}
    end
  end

  def deal(count, to: :discards, from: :draw)
    self.send(from).first(count).each{|c| c.location = to}
  end
end
