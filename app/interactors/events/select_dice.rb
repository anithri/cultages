module Events
  module SelectDice
    def self.call(dice:)
      dice.game.selected_dice = dice
      dice
    end
  end
end
