module CardData
  def self.fresh
    all = 60.times.map do |idx|
      count = rand(3) + 2
      {
        dice_requirements: DiceRequirement.bag(count),
        location:          :draw,
        name:              "Card #{idx + 1}",
        reward:            "money#{count - 1}",
      }
    end
    Player::PLAYERS.each do |player|
      2.times do |idx|
        all.push(
          {
            dice_requirements: DiceRequirement.bag(2),
            location:          player,
            name:              "#{player} unlock #{idx + 1}",
            reward:            :unlock,
          })
      end
    end

    all
  end
end
