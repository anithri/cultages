module Steps
  class WithGameBase
    include Interactor
    delegate :game, to: :context
    before do
      context.fail!(message: 'No game present') unless game
    end
  end
end
