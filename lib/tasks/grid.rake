
namespace :grid do
  desc "generate hexGrid"
  task hexes: :environment do
    raw = `node lib/tasks/generateGrid.js 5 5 5 2>/dev/null`
    data = JSON.parse(raw).with_indifferent_access

    CreateGrid.call(grid_data: data)
  end

  desc "TODO"
  task perimeter: :environment do
  end

end
