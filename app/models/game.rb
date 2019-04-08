# == Schema Information
#
# Table name: games
#
#  id               :bigint(8)        not null, primary key
#  game_state       :string
#  name             :string
#  turn             :integer          default(-1)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  selected_dice_id :integer
#

INCLUDE = {
  players:       { dice: :dice_requirement },
  cards:         { dice: :dice_requirement, dice_requirements: :dice },
  selected_dice: :dice_requirement,
}

class Game < ApplicationRecord
  include Rules
  include GameState
  include CardSlots

  validates :game_state, :name, presence: true

  has_many :players, autosave: true, dependent: :destroy, inverse_of: :game

  belongs_to :selected_dice, class_name: 'Dice',
             optional:                   true, inverse_of: :game

  has_many :dice, through: :players
  scope :tree, -> { includes(INCLUDE) }
  scope :list, -> { unscope.order(name: :asc) }

  def url
    if player_turn?
      "/games/#{id}/player/#{current_player.id}"
    else
      "/games/#{id}/#{game_state}"
    end
  end

  def find_die(dice_id)
    dice.to_a.find{|d| d.id == dice_id}
  end

  def messages
    @messages_list = [{type: :info, body: 'Welcome'}] if self.ready_to_start?
    @messages_list ||= []
  end

  def send_message(type, body)
    messages.push({ type: type, body: body })
  end

  def current_player
    players[turn % players.length]
  end

  def current_player_id
    return if turn < 0
    current_player.id
  end

  def advance_turn
    self.turn += 1
  end

  def deselect_dice
    self.selected_dice = nil
  end
end
