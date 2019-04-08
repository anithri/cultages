module GameState
  extend ActiveSupport::Concern

  # rubocop:disable Metrics/BlockLength
  included do
    include AASM

    aasm column: :game_state do
      state :filled_box, initial: true
      state :ready_to_start, before_enter: Events::SetupGame, after_exit: Events::StartGame
      state :player_turn, before_enter: Events::StartTurn
      state :end_of_game
      state :empty_box

      event :setup_game do
        transitions from: :filled_box, to: :ready_to_start
      end

      event :start_game do
        transitions from: :ready_to_start,
                    to: :player_turn,
                    guard: :can_start_game?
      end

      event :next_player do
        transitions from: :player_turn,
                    to: :end_of_game,
                    guard: :game_over?
        transitions from: [:start_of_round, :player_turn],
                    to: :player_turn
      end

      event :put_away do
        transitions from: [:end_of_game], to: :empty_box
      end
    end
  end

  def final_player?
    turn % players.length == players.length - 1
  end

  def game_over?
    final_player? && final_round?
  end

  def can_start_game?
    valid?
  end

  def final_round?
    false
  end
  # rubocop:enable Metrics/BlockLength

end

# setupGame
# startGame
#   -- deal
#   -- signal 'next_round'
# nextRound
#   -- signal 'start_turn'
# nextPlayer
#   -- advance Turn counter
#   -- repeat player actions until end of turn
#
#
