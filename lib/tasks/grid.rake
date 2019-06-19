namespace :grid do

  desc 'generate grid layout'
  task layout: :environment do
  end

  desc "generate grid map"
  task map: :environment do
    raw = `GRID_SIZE=12 GRID_ROWS=8 GRID_COLS=6 yarn -s generateGrid`
    data  = JSON.parse(raw).with_indifferent_access
    puts raw
    5.times do
      # CreateGridMap.call data: data
    end
  end
end
