
namespace :grid do
  desc "generate hexGrid"
  task hexes: :environment do
    raw = `node lib/tasks/generateGrid.js 24 16 10 2>/dev/null`
    data = JSON.parse(raw).with_indifferent_access
    puts data.inspect
    CreateGrid.call(grid_data: data)
  end

  desc "TODO"
  task perimeter: :environment do
  end

end
