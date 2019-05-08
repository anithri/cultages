namespace :grid do

  desc 'generate grid data'
  task data: :environment do
    raw = `GRID_SIZE=12 GRID_ROWS=48 GRID_COLS=30 yarn -s generateGrid`
    raw_data  = JSON.parse(raw).with_indifferent_access
    result = ProcessGridData.call raw_data: raw_data
  end

  desc "generate hexGrid"
  task hex: :environment do
    5.times do
      CreateGridMap.call grid: GridLayout.last
    end
  end

  desc "smooth height"
  task height: :environment do
    cols = GridHex.maximum(:r)
    step = 2.0 / cols
    GridCorner.update_all("z = x * #{step}")
  end
end
