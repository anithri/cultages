class GenerateGridLayout
  include Interactor
  
  delegate :rows, :cols, to: :context
  before do
    context.fail!(error: 'cols and/or rows not passed') unless cols && rows
  end
  
  def call
    context.data = generateGrid()
  end
  
  def generateGrid
    all = []
    cols.times do |col|
      rows.times do |row|
        all.push({
          q: col,
                 })
      end
    end
  end
end
