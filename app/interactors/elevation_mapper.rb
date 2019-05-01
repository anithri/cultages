class ElevationMapper
  include Interactor

  before do
    context.fail(error: 'missing map') unless context.grid_map
  end

  delegate :grid_map, to: :context

  def call


  end

  def gen
    context.gen ||=

  end
end
