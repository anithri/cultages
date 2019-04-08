module Rewards
  extend ActiveSupport::Concern
  REWARDS = %w{money1 money2 money3 money4 money5 money6
                        money7 money8 money9 money10 unlock}

  included do
  end

  def award_to(player)
    player.earn(cash)
    return unless reward == 'unlock'
    player.game.send_message('success','Unlocked Die!')
    d = player.dice.to_a.find{|d| d.value < 0}
    d && d.update(value: 0)
  end

  def cash
    return 0 if reward == 'unlock'
    reward.split('y')[-1].to_i
  end
end
