class GenerateGridLayout
  include Interactor
  
  delegate :hexes, :raw, :rows, :cols, to: :context
  before do
    context.fail!(error: 'rows and/or cols not passed') unless rows && cols
    generateGrid()
  end
  
  def call
    
    context.data = generateGrid()
  end
  
  def generateGrid
    JSON.parse(`yarn -s genGrid #{cols} #{rows}`)
  end
  
  def hexes
    context.hexes ||= []
  end
end
