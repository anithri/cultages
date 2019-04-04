module CardData
  def self.fresh
    60.times.map do |idx|
      {
        dice_requirements: DiceRequirement.bag(rand(3) + 1),
        location: :draw,
        name: "Card #{idx + 1}",
        reward: :money1,
      }
    end
 end
end
