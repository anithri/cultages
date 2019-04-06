module Events
  module SelectDice
    def self.call(dice:)
      dice.game.selected_dice = dice
      dice.game.save
      dice.game
    end
  end
end
