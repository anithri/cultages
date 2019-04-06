module Events
  module SelectDice
    def self.call(dice_id:)
      dice = Dice.select_dice(dice_id)
      dice.game.selected_dice.update_all(selected: false)
      dice.update(selected: true)
      dice
    end
  end
end
