module CardData
  def self.fresh
    60.times.map do |idx|
      {
        dice: Array.new(rand(3) + 1){rand(6) + 1},
        location: :draw,
        name: "Card #{idx + 1}",
        reward: :money1,
      }
    end
 end
end
